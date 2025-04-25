import { X } from "lucide-react";
import React from "react";

const DeleteConfirmationModal = ({
  product,
  onClose,
  onConfirm,
  onRestore,
}: {
  product: any;
  onClose: () => void;
  onConfirm?: () => void;
  onRestore?: () => void;
}) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black h-full bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg w-[450px] shadow-lg">
        <div className="flex justify-between items-center border-b border-gray-700 pb-3">
          <h3 className="text-xl text-white">Delete Product</h3>
          <button
            className="text-gray-400 hover:text-white cursor-pointer"
            onClick={onClose}
          >
            <X size={22} />
          </button>
        </div>
        {product?.isDeleted ? (
          <p className="text-gray-300 mt-4">
            This product is already scheduled for delete and will be delete in
            24 hour. Are you want to restore {"  "}{" "}
            <span className="font-semibold text-white">{product.title}</span>
            ?
            <br />
            This product will be restored from deleted state.
          </p>
        ) : (
          <p className="text-gray-300 mt-4">
            Are you sure you want to delete {"  "}{" "}
            <span className="font-semibold text-white">{product.title}</span>
            ?
            <br />
            This product will be moved to a **delete state** and permanently
            removed **after 24 hours**. You can recover it within this time.
          </p>
        )}

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-md font-semibold flex items-center justify-center gap-2"
          >
            Cancel
          </button>
          <button
            onClick={product?.isDeleted ? onRestore : onConfirm}
            className={`${
              product?.isDeleted
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700"
            } text-white p-2 rounded-md font-semibold flex items-center justify-center gap-2`}
          >
            {product?.isDeleted ? "Restore" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
