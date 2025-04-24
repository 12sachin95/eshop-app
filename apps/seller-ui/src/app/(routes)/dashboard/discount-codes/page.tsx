"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import DeleteDiscountModal from "apps/seller-ui/src/shared/componens/modals/delete.discount.modal";
import axiosInstance from "apps/seller-ui/src/utils/axiosInstance";
import { AxiosError } from "axios";
import { ChevronRight, Plus, Trash, X } from "lucide-react";
import Link from "next/link";
import Input from "packages/components/input";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedDiscount, setSelectedDiscount] = useState<any>(null);

  const queryClient = useQueryClient();

  const {
    data: discountCodes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["shop-discounts"],
    queryFn: async () => {
      const res = await axiosInstance.get("/product/api/get-discount-codes");
      return res?.data.discountCodes || [];
    },
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      public_name: "",
      discountType: "percentage",
      discountValue: "",
      discountCode: "",
    },
  });

  const createDiscountCodeMutation = useMutation({
    mutationFn: async (data) => {
      await axiosInstance.post("/product/api/create-discount-code", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["shop-discounts"],
      });
      reset();
      setShowModal(false);
    },
  });

  const deleteDiscountCodeMutation = useMutation({
    mutationFn: async (discountId) => {
      await axiosInstance.delete(
        `/product/api/delete-discount-code/${discountId}`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["shop-discounts"],
      });
      setShowDeleteModal(false);
    },
  });

  const handleDeleteClick = async (discount: any) => {
    setSelectedDiscount(discount);
    setShowDeleteModal(true);
  };

  const onSubmit = (data: any) => {
    if (discountCodes.length >= 8) {
      toast.error("You can only create up to 8 discount codes.");
      return;
    }
    createDiscountCodeMutation.mutate(data);
  };
  return (
    <div className="w-full min-h-screen p-8">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-2xl text-white font-semibold">Discount Codes</h2>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          onClick={() => setShowModal(true)}
        >
          <Plus size={18} /> Create Discount
        </button>
      </div>

      {/* Breadcrumbs */}
      <div className="flex items-center">
        <Link href="/dashboard" className="text-[#80Deea] cursor-pointer">
          Dashboard
        </Link>
        <ChevronRight size={20} className="opacity-[0.8]" />
        <span>Discount Codes</span>
      </div>

      <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-white mb-4">
          Your Discount Codes
        </h3>
        {isLoading ? (
          <p className="text-gray-400 text-center">Loading Discounts...</p>
        ) : (
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Value</th>
                <th className="p-3 text-left">Code</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {discountCodes?.map((discount: any) => {
                return (
                  <tr key={discount?.id}>
                    <td className="p-3 capitalize">{discount.public_name}</td>
                    <td className="p-3 capitalize">
                      {discount.discountType === "percentage"
                        ? "Percentage (%)"
                        : "Flat ($)"}
                    </td>
                    <td className="p-3">
                      {discount.discountValue === "percentage"
                        ? `${discount.discountValue}%`
                        : `${discount.discountValue}$`}
                    </td>
                    <td className="p-3">{discount.discountCode}</td>
                    <td className="p-3">
                      <button
                        onClick={() => handleDeleteClick(discount)}
                        className="text-red-400 hover:text-red-300 transition"
                      >
                        <Trash size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {!isLoading && discountCodes?.length === 0 && (
          <p className="text-gray-400 w-full pt-4 block text-center">
            No discount codes available
          </p>
        )}
      </div>

      {/* Create Discount modal */}

      {showModal && (
        <div className="fixed top-0 left-0 w-full bg-black h-full bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg w-[450px] shadow-lg">
            <div className="flex justify-between items-center border-b border-gray-700 pb-3">
              <h3 className="text-xl text-white">Create Discount Code</h3>
              <button
                className="text-gray-400 hover:text-white"
                onClick={() => setShowModal(false)}
              >
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
              {/* Title */}
              <Input
                label="Title (Public Name)"
                {...register("public_name", {
                  required: "Title isrequired!",
                })}
              />
              {errors?.public_name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.public_name.message as string}
                </p>
              )}

              {/* Discount type */}
              <div className="mt-4">
                <label className="block font-semibold text-gray-300 mb-1">
                  Discount Type
                </label>
                <Controller
                  control={control}
                  name="discountType"
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full border outline-none border-gray-700 bg-transparent text-white p-2 rounded-md"
                    >
                      <option value="percentage">Percentage (%)</option>
                      <option value="flat">Flat Amount ($) </option>
                    </select>
                  )}
                />
                {errors?.discountType && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.discountType.message as string}
                  </p>
                )}
              </div>

              <div className="mt-2">
                <Input
                  label="Discount Value"
                  type="number"
                  min={1}
                  {...register("discountValue", {
                    required: "Value is required",
                  })}
                />
                {errors?.discountValue && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.discountValue.message as string}
                  </p>
                )}
              </div>

              <div className="mt-2">
                <Input
                  label="Discount Code"
                  {...register("discountCode", {
                    required: "Value is required",
                  })}
                />
                {errors?.discountCode && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.discountCode.message as string}
                  </p>
                )}
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  disabled={createDiscountCodeMutation.isPending}
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold flex items-center justify-center gap-2"
                >
                  <Plus size={18} />
                  {createDiscountCodeMutation.isPending
                    ? "Creating..."
                    : "Create"}
                </button>
                {createDiscountCodeMutation.isError && (
                  <p className="text-red-500 text-sm mt-2">
                    {(
                      createDiscountCodeMutation.error as AxiosError<{
                        message: string;
                      }>
                    )?.response?.data?.message || "Something went wrong"}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
      {showDeleteModal && selectedDiscount && (
        <DeleteDiscountModal
          discount={selectedDiscount}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() =>
            deleteDiscountCodeMutation.mutate(selectedDiscount.id)
          }
        />
      )}
    </div>
  );
};

export default Page;
