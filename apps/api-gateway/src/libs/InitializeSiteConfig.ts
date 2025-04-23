import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initializeSiteConfig = async () => {
  try {
    const existingConfig = await prisma.site_config.findFirst();

    if (!existingConfig) {
      await prisma.site_config.create({
        data: {
          categories: [
            "Electronics",
            "Fashion",
            "Home & Garden",
            "Sports",
            "Toys & Games",
          ],
          subCategories: {
            Electronics: [
              "Smartphones",
              "Laptops",
              "Tablets",
              "Headphones",
              "Speakers",
            ],
            Fashion: [
              "Men's Clothing",
              "Women's Clothing",
              "Kids' Clothing",
              "Shoes",
              "Accessories",
            ],
            "Home & Garden": [
              "Furniture",
              "Home Decor",
              "Kitchenware",
              "Bedding",
              "Bath",
            ],
            Sports: [
              "Team Sports",
              "Individual Sports",
              "Fitness Equipment",
              "Outdoor Gear",
              "Sports Apparel",
            ],
            "Toys & Games": [
              "Action Figures",
              "Board Games",
              "Puzzles",
              "Building Sets",
              "Dolls",
            ],
          },
        },
      });
    }
  } catch (error) {
    console.log("===Error in initializing site config ", error);
  }
};

export default initializeSiteConfig;


// timings 10:08:36
