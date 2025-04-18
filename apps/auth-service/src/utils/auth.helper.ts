import crypto from "crypto";
import { ValidationError } from "@packages/error-handler";
import { NextFunction } from "express";
import redis from "@packages/libs/redis";
import { sendEmail } from "./sendMail";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateRegistrationData = (
  data: any,
  userType: "user" | "seller"
) => {
  const { name, email, password, phone_number, country } = data;

  if (
    !name ||
    !email ||
    !password ||
    (userType === "seller" && (!phone_number || !country))
  ) {
    throw new ValidationError("Missing required fields");
  }

  if (!emailRegex.test(email)) {
    throw new ValidationError("Invalid email format");
  }
};

export const checkOtpResctrictions = async (
  email: string,
  next: NextFunction
) => {
  if (await redis.get(`otp_lock:${email}`)) {
    return next(
      new ValidationError(
        "Account locked due to multiple failed attempts!, Try again letter after 30 min"
      )
    );
  }
  if (await redis.get(`otp_spam_lock:${email}`)) {
    // when user sending again and again in every minute so it will be spam
    return next(
      new ValidationError(
        "Too many OTP requests!, Try again letter after 1 hour"
      )
    );
  }

  if (await redis.get(`otp_cooldown:${email}`)) {
    return next(
      new ValidationError(
        "Please wait for 1 minute before requesting another OTP"
      )
    );
  }
};

export const trackOtpRequests = async (email: string, next: NextFunction) => {
  const otpRequestKey = `otp_request_count:${email}`;
  let requestCount = parseInt((await redis.get(otpRequestKey)) || "0");
  if (requestCount >= 2) {
    await redis.set(`otp_spam_lock:${email}`, "locked", "EX", 3600);
    return next(
      new ValidationError(
        "Too many OTP requests!, Try again letter after 1 hour"
      )
    );
  }

  await redis.set(otpRequestKey, requestCount + 1, "EX", 3600);
};

export const sendOtp = async (
  name: string,
  email: string,
  template: string
) => {
  const otp = crypto.randomInt(1000, 9999).toString();
  await sendEmail(email, "Verify Your Email", template, { name, otp });
  // save otp in redis
  // upstash redis connection
  await redis.set(`otp:${email}`, otp, "EX", 300);
  await redis.set(`otp_cooldown:${email}`, "true", "EX", 60);
};

export const verifyOtp = async (
  email: String,
  otp: String,
  next: NextFunction
) => {
  const storedOtp = await redis.get(`otp:${email}`);
  if (!storedOtp) {
    throw new ValidationError("Invalid or expired OTP");
  }
  const failedAttemptsKey = `otp_attempts:${email}`;
  const failedAttempts = parseInt((await redis.get(failedAttemptsKey)) || "0");

  if (storedOtp !== otp) {
    if (failedAttempts >= 2) {
      await redis.set(`otp-lock:${email}`, "locked", "EX", 1800);
      await redis.del(`otp:${email}`);
      throw new ValidationError(
        "Too many failed attempts!, account locked for 30 mins"
      );
    }
    await redis.set(failedAttemptsKey, failedAttempts + 1, "EX", 3600);

    throw new ValidationError(
      `Invalid OTP. ${2 - failedAttempts} attempts left.`
    );
  }
  await redis.del(`otp:${email}`, failedAttemptsKey);
};
