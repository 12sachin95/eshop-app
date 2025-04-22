import { AuthError } from "@packages/error-handler";
import { NextFunction, Response } from "express";

export const isSeller = (req: any, Response: Response, next: NextFunction) => {
  if (req.role !== "seller") {
    return next(new AuthError("Access denied: seller only"));
  }
};

export const isUser = (req: any, Response: Response, next: NextFunction) => {
  if (req.role !== "user") {
    return next(new AuthError("Access denied: user only"));
  }
};
