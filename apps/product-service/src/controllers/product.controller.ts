import { NotFoundError, ValidationError } from "@packages/error-handler";
import imagekit from "@packages/libs/imagekkit";
import prisma from "@packages/libs/prisma";
import { NextFunction, Request, Response } from "express";

// get Product categories
export const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const config = await prisma.site_config.findFirst();
    if (!config) {
      return res.status(404).json({ message: "Categories not found" });
    }

    return res.status(200).json({
      categories: config.categories,
      subCategories: config.subCategories,
    });
  } catch (error) {
    return next(error);
  }
};

// create discount codes
export const createDiscountCodes = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { public_name, discountType, discountValue, discountCode } = req.body;

    const isDiscountCodeExist = await prisma.discount_codes.findUnique({
      where: { discountCode },
    });
    if (isDiscountCodeExist) {
      return new ValidationError(
        "Discount code already exist, Please use different code!"
      );
    }
    const discountCodes = await prisma.discount_codes.create({
      data: {
        public_name,
        discountType,
        discountValue: parseFloat(discountValue),
        discountCode,
        sellerId: req.seller.id,
      },
    });

    return res.status(201).json({ success: true, discountCodes });
  } catch (error) {
    return next(error);
  }
};

// get discount codes
export const getDiscountCodes = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const discountCodes = await prisma.discount_codes.findMany({
      where: { sellerId: req.seller.id },
    });

    return res.status(200).json({ success: true, discountCodes });
  } catch (error) {
    return next(error);
  }
};

// delete discount code
export const deleteDiscountCode = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const sellerId = req.seller?.id;

    const discountCode = await prisma.discount_codes.findUnique({
      where: { id: id },
      select: { id: true, sellerId: true },
    });
    if (!discountCode) {
      return new NotFoundError("Discount code not found!");
    }
    if (discountCode.sellerId !== sellerId) {
      return new ValidationError("You are not authorized to delete this code");
    }
    await prisma.discount_codes.delete({ where: { id: id } });

    return res
      .status(200)
      .json({ success: true, message: "Discount code deleted successfully!" });
  } catch (error) {
    return next(error);
  }
};

// upload images to imagekit
export const uploadProductImage = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { fileName } = req.body;
    const response = await imagekit.upload({
      file: fileName,
      fileName: `product-${Date.now()}.jpg`,
      folder: "/products",
    });

    res.status(201).json({ file_url: response.url, fileId: response.fileId });
  } catch (error) {
    return next(error);
  }
};

// delete images to imagekit
export const deleteProductImage = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { fileId } = req.body;
    const response = await imagekit.deleteFile(fileId);

    res.status(200).json({ success: true, response });
  } catch (error) {
    return next(error);
  }
};
