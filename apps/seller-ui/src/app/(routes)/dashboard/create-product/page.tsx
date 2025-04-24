"use client";
import { useQuery } from "@tanstack/react-query";
import ImagePlaceholder from "apps/seller-ui/src/shared/componens/image-placeholder";
import { enhancements } from "apps/seller-ui/src/utils/Ai.enhancements";
import axiosInstance from "apps/seller-ui/src/utils/axiosInstance";
import { ChevronRight, Wand, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ColorSelector from "packages/components/color-selector";
import CustomProperties from "packages/components/custom-properties";
import CustomSpecifications from "packages/components/custom-specifications";
import Input from "packages/components/input";
import RichtextEditor from "packages/components/rich-text-editor";
import SizeSelector from "packages/components/size-selector";
import React, { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";

type UploadedImage = {
  fileId: string;
  file_url: string;
};

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
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);

  const [activeEffect, setActiveEffect] = useState("");
  const [pictureUploadingLoader, setPictureUploadingLoader] = useState(false);
  const [isChanged, setIsChanged] = useState(true);
  const [images, setImages] = useState<(UploadedImage | null)[]>([null]);

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

  const { data: discountCodes = [], isLoading: discountLoading } = useQuery({
    queryKey: ["shop-discounts"],
    queryFn: async () => {
      const res = await axiosInstance.get("/product/api/get-discount-codes");
      return res?.data.discountCodes || [];
    },
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

  const convertFileToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageChange = async (file: File | null, index: number) => {
    if (!file) return;
    setPictureUploadingLoader(true);
    try {
      const fileName = await convertFileToBase64(file);
      const response = await axiosInstance.post(
        "/product/api/upload-product-image",
        { fileName }
      );
      const updatedImages = [...images];
      const uploadedImage = {
        fileId: response.data.fileId,
        file_url: response.data.file_url,
      };
      updatedImages[index] = uploadedImage;

      if (index === images.length - 1 && updatedImages.length < 8) {
        updatedImages.push(null);
      }
      setImages(updatedImages);
      setValue("images", updatedImages);
    } catch (error) {
      console.log("Error in image upload", error);
    } finally {
      setPictureUploadingLoader(false);
    }
  };

  const handleRemoveImage = async (index: number) => {
    try {
      const updatedImages = [...images];
      const imageToDelete = updatedImages[index];
      if (imageToDelete && typeof imageToDelete === "object") {
        await axiosInstance.delete("/product/api/delete-product-image", {
          data: { fileId: imageToDelete.fileId },
        });
      }
      updatedImages.splice(index, 1);

      if (!updatedImages.includes(null) && updatedImages.length < 8) {
        updatedImages.push(null);
      }
      setImages(updatedImages);
      setValue("images", updatedImages);
    } catch (error) {
      console.log("Error in delete image", error);
    }
  };

  const applyTransformation = async (transformation: string) => {
    if (!selectedImage || processing) return;
    setProcessing(true);
    setActiveEffect(transformation);
    try {
      let transformedUrl = selectedImage;
      if (selectedImage.includes("?")) {
        const splitedImage = selectedImage.split("?")[0];
        transformedUrl = `${splitedImage}?tr=${transformation}`;
      } else {
        transformedUrl = `${selectedImage}?tr=${transformation}`;
      }

      setSelectedImage(transformedUrl);
    } catch (error) {
      console.log("Error in product image AI enhancement", error);
    } finally {
      setProcessing(false);
    }
  };

  const handleSaveDraft = () => {};

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
        <Link href="/dashboard" className="text-[#80Deea] cursor-pointer">
          Dashboard
        </Link>
        <ChevronRight size={20} className="opacity-[0.8]" />
        <span>Create Product</span>
      </div>

      {/* Content Layout */}
      <div className="flex w-full gap-6 py-4">
        <div className="md:w-[35%]">
          {images?.length > 0 && (
            <ImagePlaceholder
              images={images}
              setOpenImageModal={setOpenImageModal}
              setSelectedImage={setSelectedImage}
              pictureUploadingLoader={pictureUploadingLoader}
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
                images={images}
                setOpenImageModal={setOpenImageModal}
                setSelectedImage={setSelectedImage}
                pictureUploadingLoader={pictureUploadingLoader}
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
                              <option
                                value={category}
                                className="bg-black"
                                key={category}
                              >
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
                {errors?.detailed_description && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.detailed_description.message as string}
                  </p>
                )}
              </div>

              <div className="mt-2">
                <Input
                  label="Video URL"
                  placeholder="https://www.youtube.com/embed/xyz"
                  {...register("video_url", {
                    pattern: {
                      value:
                        /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([a-zA-Z0-9_-]{11})/,
                      message: "Invalid youtube embed url",
                    },
                  })}
                />
                {errors?.video_url && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.video_url.message as string}
                  </p>
                )}
              </div>

              <div className="mt-2">
                <Input
                  label="Sale Price *"
                  placeholder="15$"
                  {...register("sale_price", {
                    required: "Sale Price is required!",
                    valueAsNumber: true,
                    min: { value: 1, message: "Sale Price must be at least 1" },
                    validate: (value) => {
                      if (isNaN(value)) return "Only numbers are valid";
                      if (regularPrice && value >= regularPrice) {
                        return "Sale Price must be less than Regular Price";
                      }
                      return true;
                    },
                  })}
                />
                {errors?.sale_price && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.sale_price.message as string}
                  </p>
                )}
              </div>

              <div className="mt-2">
                <Input
                  label="Stock *"
                  placeholder="100"
                  {...register("stock", {
                    required: "Stock is required!",
                    valueAsNumber: true,
                    min: { value: 1, message: "Stock must be at least 1" },
                    max: { value: 1000, message: "Stock can not exceed 1000" },

                    validate: (value) => {
                      if (isNaN(value)) return "Only numbers are allowed";
                      if (!Number.isInteger(value)) {
                        return "Stock must be whole number";
                      }
                      return true;
                    },
                  })}
                />
                {errors?.stock && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.stock.message as string}
                  </p>
                )}
              </div>

              <div className="mt-2">
                <SizeSelector control={control} errors={errors} />
              </div>

              <div className="mt-3">
                <label className="blocl font-semibold text-gray-300 mb">
                  Select Discount Codes (optional)
                </label>

                {discountLoading ? (
                  <p className="text-gray-400">Loading Discount codes...</p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {discountCodes?.map((code: any) => {
                      return (
                        <button
                          key={code.id}
                          type="button"
                          className={`px-3 py-1 rounded-md text-sm font-semibold border ${
                            watch("discountCodes")?.includes(code.id)
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
                          }`}
                          onClick={() => {
                            const currentSelection =
                              watch("discountCodes") || [];
                            const updatedSelection = currentSelection?.includes(
                              code.id
                            )
                              ? currentSelection.filter(
                                  (id: string) => id !== code.id
                                )
                              : [...currentSelection, , code.id];
                            setValue("discountCodes", updatedSelection);
                          }}
                        >
                          {code?.public_name} ({code.discountValue}
                          {code.discountType === "percentage" ? "%" : "$"})
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Image inhancement modal */}
      {openImageModal && (
        <div className="fixed top-0 left-0 w-full bg-black h-full bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg w-[450px] shadow-lg">
            <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-4">
              <h2 className="text-lg text-white font-semibold">
                Enhance Product Image
              </h2>
              <button
                className="cursor-pointer text-gray-400 hover:text-white"
                onClick={() => {
                  setOpenImageModal(false);
                  setSelectedImage("");
                }}
              >
                <X size={20} />
              </button>
            </div>
            <div className="relative w-full h-[250px] rounded-md overflow-hidden border border-gray-600">
              <Image src={selectedImage!} alt="product-image" layout="fill" />
            </div>
            {selectedImage && (
              <div className="mt-4 space-y-2">
                <h3 className="text-white text-sm">Ai Enhancements</h3>
                <div className="grid grid-cols-2 gap-3 mx-h-[250px] overflow-y-auto">
                  {enhancements?.map(({ label, effect }) => {
                    return (
                      <button
                        key={effect}
                        className={`p-2 rounded-md flex items-center gap-2 ${
                          activeEffect === effect
                            ? "bg-blue-600 text-white"
                            : "bg-gray-700 hover:bg-gray-600"
                        }`}
                        onClick={() => applyTransformation(effect)}
                        disabled={processing}
                      >
                        <Wand size={18} />
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="mt-6 flex justify-end gap-3">
        {isChanged && (
          <button
            type="button"
            onClick={handleSaveDraft}
            className="px-4 py-2 bg-gray-700 text-white rounded-md"
          >
            Save Draft
          </button>
        )}
        <button
          type="submit"
          //   onClick={handleSaveDraft}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create"}
        </button>
      </div>
    </form>
  );
};

export default Page;
