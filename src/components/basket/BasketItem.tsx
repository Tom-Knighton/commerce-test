import React from "react";
import { Trash2 } from "lucide-react";

interface BasketItemProps {
  image: string;
  name: string;
  originalPrice: number;
  currentPrice: number;
  option: string;
  size: string;
  code: string;
}

export function BasketItem({
  image,
  name,
  originalPrice,
  currentPrice,
  option,
  size,
  code,
}: BasketItemProps) {
  return (
    <div className="flex items-start gap-4 p-4 border-b border-gray-200">
      <img src={image} alt={name} className="w-24 h-24 object-cover rounded" />
      <div className="flex-1">
        <h3 className="font-medium text-lg">{name}</h3>
        <div className="mt-2 space-y-1 text-sm text-gray-600">
          <p>Option: {option}</p>
          <p>Size: {size}</p>
          <p>Code: {code}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center gap-2">
          <span className="line-through text-red-500">
            £{originalPrice.toFixed(2)}
          </span>
          <span className="font-bold text-lg">£{currentPrice.toFixed(2)}</span>
        </div>
        <select className="mt-2 p-1 border rounded" defaultValue="1">
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <button
          className="mt-2 text-gray-500 hover:text-red-500 flex items-center gap-1 ml-auto"
        >
          <Trash2 size={16} />
          <span>remove</span>
        </button>
      </div>
    </div>
  );
}
