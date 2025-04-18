import { NextFunction, Request, Response } from "express";
import {
  checkOtpResctrictions,
  sendOtp,
  trackOtpRequests,
  validateRegistrationData,
  verifyOtp,
} from "../utils/auth.helper";
import prisma from "@packages/libs/prisma";
import { ValidationError } from "@packages/error-handler";
import bcrypt from "bcryptjs";

export type usersWhereInput = {
  AND?: usersWhereInput[] | undefined;
  OR?: usersWhereInput[] | undefined;
  NOT?: usersWhereInput[] | undefined;
  id?: string | undefined;
  email?: string | undefined;
};

// Register new user sent otp
export const userRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validateRegistrationData(req.body, "user");
    const { name, email }: any = req.body;

    const existingUser = await prisma.users.findUnique({
      where: { email },
    });
    if (existingUser) {
      return next(new ValidationError("User already exists")); // or return res.status(400).json({
    }

    await checkOtpResctrictions(email, next);
    await trackOtpRequests(email, next);
    await sendOtp(name, email, "user-activation-mail");

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    return next(error);
  }
};

//verify user with otp and register in db
export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, otp, password, name } = req.body;

    if (!email || !otp || !password || !name) {
      return next(new ValidationError("Missing required fields"));
    }

    const existingUser = await prisma.users.findUnique({
      where: { email },
    });
    if (existingUser) {
      return next(new ValidationError("User already exists"));
    }
    await verifyOtp(email, otp, next);

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.users.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    next(error);
  }
};
