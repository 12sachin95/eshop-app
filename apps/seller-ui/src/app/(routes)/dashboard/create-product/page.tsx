"use client";
import { useQuery } from "@tanstack/react-query";
import ImagePlaceholder from "apps/seller-ui/src/shared/componens/image-placeholder";
import axiosInstance from "apps/seller-ui/src/utils/axiosInstance";
import { ChevronRight } from "lucide-react";
import ColorSelector from "packages/components/color-selector";
import CustomProperties from "packages/components/custom-properties";
import CustomSpecifications from "packages/components/custom-specifications";
import Input from "packages/components/input";
import RichtextEditor from "packages/components/rich-text-editor";
import React, { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const Page = () => {
  const {
    register,
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [openImageModal, setOpenImageModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [images, setImages] = useState<(File | null)[]>([null]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/product/api/get-categories");
        return res.data;
      } catch (error) {
        console.log("Error getCategory:", error);
      }
    },
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });

  const categories = data?.categories || [];
  const subCategoriesData = data?.subCategories || [];

  const selectedCategory = watch("category");
  const regularPrice = watch("regular_price");

  const subCategories = useMemo(() => {
    return selectedCategory ? subCategoriesData[selectedCategory] || [] : [];
  }, [selectedCategory, subCategoriesData]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleImageChange = (file: File | null, index: number) => {
    const updatedImages = [...images];
    updatedImages[index] = file;

    if (index === images.length - 1 && images.length < 8) {
      updatedImages.push(null);
    }

    setImages(updatedImages);
    setValue("images", updatedImages);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => {
      let updatedImages = [...prevImages];
      if (index === -1) {
        updatedImages[0] = null;
      } else {
        updatedImages.splice(index, 1);
      }

      if (!updatedImages.includes(null) && updatedImages.length < 8) {
        updatedImages.push(null);
      }
      return updatedImages;
    });
    setValue("images", images);
  };
  return (
    <form
      className="w-full mx-auto p-8 shadow-md rounded-lg text-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Heading and breadcrumbs */}
      <h2 className="text-2xl py-2 font-Poppins text-white font-semibold">
        Create Product
      </h2>
      <div className="flex items-center">
        <span className="text-[#80Deea] cursor-pointer">Dashboard</span>
        <ChevronRight size={20} className="opacity-[0.8]" />
        <span>Create Product</span>
      </div>

      {/* Content Layout */}
      <div className="flex w-full gap-6 py-4">
        <div className="md:w-[35%]">
          {images?.length > 0 && (
            <ImagePlaceholder
              setOpenImageModal={setOpenImageModal}
              size="765 * 850"
              index={0}
              small={false}
              onImageChange={handleImageChange}
              onRemove={handleRemoveImage}
            />
          )}

          <div className=" grid grid-cols-2 gap-3 mt-4">
            {images.slice(1).map((_, index) => (
              <ImagePlaceholder
                key={index}
                setOpenImageModal={setOpenImageModal}
                size="765 * 850"
                index={index + 1}
                small={true}
                onImageChange={handleImageChange}
                onRemove={handleRemoveImage}
              />
            ))}
          </div>
        </div>

        {/* RightSide form inputs */}
        <div className="w-[65%]">
          <div className="w-full flex gap-6">
            <div className="w-2/4">
              <Input
                label={"Product Title *"}
                placeholder={"Enter Product title"}
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && (
                <p className="text-red-500">
                  {errors?.title?.message as string}
                </p>
              )}
              <div className="mt-2">
                <Input
                  type="textarea"
                  rows={7}
                  cols={10}
                  label={"Short Description * (Max 150 words)"}
                  placeholder={"Enter Product description for quick view"}
                  {...register("description", {
                    required: "Description is required",
                    validate: (value) => {
                      const wordCount = value.trim().split(/\s+/).length;
                      return (
                        wordCount <= 150 ||
                        "Description must be less than 150 words"
                      );
                    },
                  })}
                />
                {errors.description && (
                  <p className="text-red-500">
                    {errors?.description?.message as string}
                  </p>
                )}
              </div>

              <div className="mt-2">
                <Input
                  label={"Tags *"}
                  placeholder={"apple,flagship"}
                  {...register("tags", {
                    required: "Seperate related products tags with a coma, ",
                  })}
                />
                {errors.tags && (
                  <p className="text-red-500">
                    {errors?.tags?.message as string}
                  </p>
                )}
              </div>

              <div className="mt-2">
                <Input
                  label={"Warranty *"}
                  placeholder={"1 year / No warranty"}
                  {...register("warranty", {
                    required: "Warranty is required",
                  })}
                />
                {errors.warranty && (
                  <p className="text-red-500">
                    {errors?.warranty?.message as string}
                  </p>
                )}
              </div>

              <div className="mt-2">
                <Input
                  label={"Slug *"}
                  placeholder={"product_slug"}
                  {...register("slug", {
                    required: "Slug is required",
                    pattern: {
                      value: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                      message:
                        "Slug should only contain lowercase letters, numbers, and hyphens.",
                    },
                    minLength: {
                      value: 3,
                      message: "Slug must be at least 3 characters long",
                    },
                    maxLength: {
                      value: 50,
                      message: "Slug must be at most 50 characters long",
                    },
                  })}
                />
                {errors.slug && (
                  <p className="text-red-500">
                    {errors?.slug?.message as string}
                  </p>
                )}
              </div>

              <div className="mt-2">
                <Input
                  label={"Brand"}
                  placeholder={"Apple"}
                  {...register("brand")}
                />
                {errors.brand && (
                  <p className="text-red-500">
                    {errors?.brand?.message as string}
                  </p>
                )}
              </div>
              <div className="mt-2">
                <ColorSelector control={control} errors={errors} />
              </div>

              <div className="mt-2">
                <CustomSpecifications control={control} errors={errors} />
              </div>

              <div className="mt-2">
                <CustomProperties control={control} errors={errors} />
              </div>

              <div className="mt-2">
                <label className="block font-semibold text-gray-300 mb-1">
                  Cash On Delivery
                </label>
                <select
                  {...register("cash_on_delivery", {
                    required: "Cash on Delivery is required",
                  })}
                  defaultValue="yes"
                  className="w-full border outline-none border-gray-700 bg-transparent p-1"
                >
                  <option value="yes" className="bg-black">
                    Yes
                  </option>
                  <option value="no" className="bg-black">
                    No
                  </option>
                </select>
                {errors?.cash_on_delivery && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.cash_on_delivery.message as string}
                  </p>
                )}
              </div>
            </div>

            <div className="w-2/4">
              <label className="block font-semibold text-gray-300 mb-1">
                Category *
              </label>

              {isLoading ? (
                <p className="text-gray-400">Loading categories...</p>
              ) : isError ? (
                <p className="text-red-500"> Failed to load categories</p>
              ) : (
                <>
                  <Controller
                    name="category"
                    control={control}
                    rules={{ required: "category is required!" }}
                    render={({ field }) => {
                      return (
                        <select
                          {...field}
                          className="w-full border outline-none border-gray-700 bg-transparent p-1"
                        >
                          <option value="" className="bg-black">
                            Select Category
                          </option>
                          {categories?.map((category: string) => {
                            return (
                              <option value={category} className="bg-black">
                                {category}
                              </option>
                            );
                          })}
                        </select>
                      );
                    }}
                  />
                </>
              )}
              {errors?.category && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.category.message as string}
                </p>
              )}
              <div className="mt-2">
                <label className="block font-semibold text-gray-300 mb-1 ">
                  Sub Category *
                </label>

                {isLoading ? (
                  <p className="text-gray-400">Loading sub categories...</p>
                ) : isError ? (
                  <p className="text-red-500"> Failed to load sub categories</p>
                ) : (
                  <>
                    <Controller
                      name="subCategory"
                      control={control}
                      rules={{ required: "subCategory is required!" }}
                      render={({ field }) => {
                        return (
                          <select
                            {...field}
                            className="w-full border outline-none border-gray-700 bg-transparent p-1"
                          >
                            <option value="" className="bg-black">
                              Select Sub Category
                            </option>
                            {subCategories?.map((subCategory: string) => {
                              return (
                                <option
                                  value={subCategory}
                                  className="bg-black"
                                >
                                  {subCategory}
                                </option>
                              );
                            })}
                          </select>
                        );
                      }}
                    />
                  </>
                )}
                {errors?.subCategory && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.subCategory.message as string}
                  </p>
                )}
              </div>

              <div className="mt-2">
                <label className="block font-semibold text-gray-300 mb-1">
                  Detailed Description * (Min 100 words)
                </label>
                <Controller
                  name="detailed_description"
                  control={control}
                  rules={{
                    required: "Detailed description is required!",
                    validate: (value) => {
                      const wordCount = value.trim().split(/\s+/).length;
                      return (
                        wordCount <= 150 ||
                        "Description must be less than 150 words"
                      );
                    },
                  }}
                  render={({ field }) => {
                    return (
                      <RichtextEditor
                        value={field.value}
                        onChange={field.onChange}
                      />
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Page;
