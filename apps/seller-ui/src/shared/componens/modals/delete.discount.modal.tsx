import { X } from "lucide-react";
import React from "react";

const DeleteDiscountModal = ({
  discount,
  onClose,
  onConfirm,
}: {
  discount: any;
  onClose: () => void;
  onConfirm?: () => void;
}) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black h-full bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg w-[450px] shadow-lg">
        <div className="flex justify-between items-center border-b border-gray-700 pb-3">
          <h3 className="text-xl text-white">Delete Discount Code</h3>
          <button
            className="text-gray-400 hover:text-white cursor-pointer"
            onClick={onClose}
          >
            <X size={22} />
          </button>
        </div>
        <p className="text-gray-300 mt-4">
          Are you sure you want to delete {"  "}{" "}
          <span className="font-semibold text-white">
            {discount.public_name}
          </span>
          ?
          <br />
          This action **cannot be undone**
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-md font-semibold flex items-center justify-center gap-2"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md font-semibold flex items-center justify-center gap-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDiscountModal;
