import { Plus } from "lucide-react";
import { useState } from "react";
import { Controller } from "react-hook-form";

const defaultColors = [
  "#FF69B4",
  "#33CC33",
  "#6666CC",
  "#CC3333",
  "#CCCC33",
  "#33CCCC",
  "#CC66CC",
  "#3366CC",
  "#CCCC66",
  "#6633CC",
];

const ColorSelector = ({ control, error }: any) => {
  const [customColors, setCustomColors] = useState<string[]>([]);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [newColor, setNewColor] = useState("#ffffff");

  return (
    <div className="mt-2">
      <label className="block font-semibold text-gray-300 mb-1">Colors</label>
      <Controller
        control={control}
        name="colors"
        render={({ field }) => (
          <div className="flex flex-wrap gap-3">
            {[...defaultColors, ...customColors].map(
              (color: string, index: number) => {
                const isSelected = (field.value || []).includes(color);
                const isLightColor = ["#fff", "#ffff00"].includes(color);
                return (
                  <button
                    type="button"
                    key={color}
                    className={`w-7 h-7 p-2 rounded-md flex items-center justify-center border-2 my-1 transition 
                        ${
                          isSelected
                            ? "scale-110 border-white"
                            : "border-transparent"
                        } ${isLightColor ? "border-gray-600" : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={() =>
                      field.onChange(
                        isSelected
                          ? field.value.filter((c: string) => c !== color)
                          : [...(field.value || []), color]
                      )
                    }
                  />
                );
              }
            )}

            {/*  Add new color */}
            <button
              type="button"
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="w-7 h-7 p-2 rounded-full flex items-center justify-center border-2 my-1 transition border-gray-500 bg-gray-800 hover:bg-gray-700"
            >
              <Plus size={16} color="#fff" />
            </button>
            {/* Color picker */}
            {showColorPicker && (
              <div className="relative flex items-center gap-2">
                <input
                  type="color"
                  value={newColor}
                  onChange={(e) => setNewColor(e.target.value)}
                  className="w-10 h-10 p-0 border-none cursor-pointer"
                />
                <button
                  type="button"
                  className="px-3 py-1 bg-gray-700 text-white rounded-md text-sm"
                  onClick={() => {
                    setCustomColors((prevColors) => {
                      if (!prevColors.includes(newColor)) {
                        return [...prevColors, newColor];
                      }
                      return [...prevColors];
                    });
                  }}
                >
                  Add
                </button>
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default ColorSelector;
