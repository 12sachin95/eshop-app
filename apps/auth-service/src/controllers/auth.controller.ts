import { NextFunction, Request, Response } from "express";
import {
  checkOtpResctrictions,
  sendOtp,
  trackOtpRequests,
  validateRegistrationData,
} from "../utils/auth.helper";
import prisma from "@packages/libs/prisma";
import { ValidationError } from "@packages/error-handler";

// Register new user
export const userRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validateRegistrationData(req.body, "user");
    const { name, email } = req.body;

    const existingUser = await prisma.users.findUnique({
      where: email,
    });
    if (existingUser) {
      return next(new ValidationError("User already exists")); // or return res.status(400).json({
    }

    await checkOtpResctrictions(email, next);
    await trackOtpRequests(email, next);
    await sendOtp(email, name, "user-activation-mail");

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    return next(error);
  }
};
