import { useMutation } from "@tanstack/react-query";
import { shopCategories } from "apps/seller-ui/src/utils/shop-categories";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const CreateShop = ({
  setActiveStep,
  sellerId,
}: {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  sellerId: string;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const shopCreateMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/api/create-shop`,
        data
      );
      return response.data;
    },

    onSuccess: () => {
      setActiveStep(3);
    },
  });

  const onSubmit = async (data: any) => {
    const shopData = { ...data, sellerId };
    shopCreateMutation.mutate(shopData);
  };

  const countWords = (text: string) => text.trim().split(/\s+/).length;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-2xl font-semibold text-center mb-4">
          Setup new shop
        </h3>
        <label className="block text-gray-700 mb-1">Name *</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 outline-0 !rounded mb-1"
          placeholder="Shop Name"
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">
            {errors.name?.message as string}
          </p>
        )}

        <label className="block text-gray-700 mb-1">
          Bio (Max 100 words) *
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 outline-0 !rounded mb-1"
          placeholder="Shop bio"
          {...register("bio", {
            required: "Bio is required",
            validate: (value) =>
              countWords(value) <= 100 || "Bio must be less than 100 words",
          })}
        />
        {errors.bio && (
          <p className="text-red-500 text-sm">
            {errors.bio?.message as string}
          </p>
        )}

        <label className="block text-gray-700 mb-1">Shop Address *</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 outline-0 !rounded mb-1"
          placeholder="Address"
          {...register("address", {
            required: "Shop Address is required",
          })}
        />
        {errors.address && (
          <p className="text-red-500 text-sm">
            {errors.address?.message as string}
          </p>
        )}

        <label className="block text-gray-700 mb-1">Opening Hours *</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 outline-0 !rounded mb-1"
          placeholder="e.g., Mon -Fri 9AM - 6PM"
          {...register("opening_hours", {
            required: "Shop Opening Hours is required",
          })}
        />
        {errors.opening_hours && (
          <p className="text-red-500 text-sm">
            {errors.opening_hours?.message as string}
          </p>
        )}

        <label className="block text-gray-700 mb-1">Website</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 outline-0 !rounded mb-1"
          placeholder="https://example.com"
          {...register("website", {
            pattern: {
              value: /^(https?:\/\/)?(www\.)?[\w-]+\.[\w-]+(\/[^\s]*)?$/,
              message: "Enter a valid URL",
            },
          })}
        />
        {errors.website && (
          <p className="text-red-500 text-sm">
            {errors.website?.message as string}
          </p>
        )}

        <label className="block text-gray-700 mb-1">Category</label>
        <select
          className=" w-full p-2 border border-gray-300 outline-0 !rounded mb-1"
          {...register("category", {
            required: "Category is required",
          })}
        >
          {shopCategories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}{" "}
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">
            {errors.category?.message as string}
          </p>
        )}

        <button
          type="submit"
          disabled={shopCreateMutation.isPending}
          className="w-full text-lg cursor-pointer bg-black text-white py-2 rounded-lg mt-4"
        >
          {shopCreateMutation.isPending ? "Creating..." : "Create Shop"}
        </button>
      </form>
    </div>
  );
};

export default CreateShop;
