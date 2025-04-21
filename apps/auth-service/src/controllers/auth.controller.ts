import { NextFunction, Request, Response } from "express";
import {
  checkOtpResctrictions,
  handleForgotPassword,
  sendOtp,
  trackOtpRequests,
  validateRegistrationData,
  verifyForgotPasswordOtp,
  verifyOtp,
} from "../utils/auth.helper";
import prisma from "@packages/libs/prisma";
import { AuthError, ValidationError } from "@packages/error-handler";
import bcrypt from "bcryptjs";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { setCookie } from "../utils/cookies/setCookies";

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

// login user
export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new ValidationError("Email and password required!"));
    }
    const user = await prisma.users.findUnique({
      where: { email },
    });
    if (!user) {
      return next(new ValidationError("User does not exists!"));
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password!);
    if (!isPasswordMatch) {
      return next(new AuthError("Invalid user or password"));
    }

    // generate access and refresh token
    const accessToken = jwt.sign(
      { id: user.id, role: "user" },
      process.env.ACCESS_TOKEN_SECRET as string,
      { expiresIn: "15m" }
    );
    const refreshToken = jwt.sign(
      { id: user.id, role: "user" },
      process.env.REFRESH_TOKEN_SECRET as string,
      { expiresIn: "7d" }
    );

    setCookie(res, "refresh_token", refreshToken);
    setCookie(res, "access_token", accessToken);

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: { id: user.id, email: user.email, name: user.name },
    });
  } catch (error) {
    next(error);
  }
};

// Refresh token
export const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken) {
      throw new ValidationError("Unauthorized! No refresh token");
    }
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET as string
    ) as { id: string; role: string };

    if (!decoded || !decoded.id || !decoded.role) {
      return new JsonWebTokenError("Forbidden! Invalid refresh tokken.");
    }

    const user = await prisma.users.findUnique({
      where: { id: decoded.id },
    });

    if (!user) {
      return new AuthError("Forbidden! User/Seller not found");
    }

    // generate access and refresh token
    const newAccessToken = jwt.sign(
      { id: decoded.id, role: decoded.role },
      process.env.ACCESS_TOKEN_SECRET as string,
      { expiresIn: "15m" }
    );

    setCookie(res, "access_token", newAccessToken);
    return res.status(201).json({ success: true });
  } catch (error) {
    return next(error);
  }
};

// get logged in user
export const getUser = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { password, ...user } = req.user;
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

// User Forgot password
export const userForgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await handleForgotPassword(req, res, next, "user");
};

// Verify user forgot password
export const verifyUserForgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await verifyForgotPasswordOtp(req, res, next, "user");
};

// User Reset password
export const resetUserPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, newPassword } = req.body;
    if (!email || !newPassword) {
      return next(new ValidationError("Email and password required!"));
    }
    const user = await prisma.users.findUnique({
      where: { email },
    });
    if (!user) {
      return next(new ValidationError("User does not exists!"));
    }

    //Compare password
    const isSamePassword = await bcrypt.compare(newPassword, user.password!);
    if (isSamePassword) {
      return next(
        new AuthError("New password can not be same as old password")
      );
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await prisma.users.update({
      where: { email },
      data: {
        password: hashedPassword,
      },
    });
    res
      .status(200)
      .json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    next(error);
  }
};
