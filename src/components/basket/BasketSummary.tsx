import { Check } from "lucide-react";

interface OrderSummaryProps {
  itemsTotal: number;
  savings: number;
  subtotal: number;
}

export function OrderSummary({
  itemsTotal,
  savings,
  subtotal,
}: OrderSummaryProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Items total</span>
          <span>£{itemsTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Items savings</span>
          <span>-£{Math.abs(savings).toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold pt-2 border-t">
          <span>Basket subtotal</span>
          <span>£{subtotal.toFixed(2)}</span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="bg-green-50 p-3 rounded flex items-center gap-2 text-green-700">
          <Check size={20} />
          <span>You save £{Math.abs(savings).toFixed(2)} on this order</span>
        </div>
        <div className="flex items-center gap-2 text-green-700">
          <Check size={20} />
          <span>Free UK Delivery</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Promo Code"
            className="flex-1 p-2 border rounded"
          />
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
            Apply
          </button>
        </div>

        <button className="w-full bg-green-600 text-white py-3 rounded font-medium hover:bg-green-700">
          Checkout Now
        </button>

        <div className="flex justify-center gap-4 mt-4">
          <img
            src="https://cdn-icons-png.flaticon.com/128/349/349221.png"
            alt="Visa"
            className="h-8"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/349/349228.png"
            alt="Mastercard"
            className="h-8"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/196/196566.png"
            alt="PayPal"
            className="h-8"
          />
        </div>

        <div className="text-center space-y-2 mt-4">
          <a href="#" className="text-green-600 hover:underline block">
            Paying with a gift card?
          </a>
          <a href="#" className="text-green-600 hover:underline block">
            What are your delivery options?
          </a>
        </div>
      </div>
    </div>
  );
}
