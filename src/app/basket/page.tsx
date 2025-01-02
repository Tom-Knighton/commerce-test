import { BasketItem } from "@/components/basket/BasketItem";
import { OrderSummary } from "@/components/basket/BasketSummary";
import { GetBasket } from "@/lib/services/BasketService";
import { AlertTriangle } from "lucide-react";

const BasketPage = async () => {
  const basket = await GetBasket();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-semibold mb-4">
              Your Shopping Basket ({basket.totalItems} Items)
            </h1>

            <div className="bg-white rounded-lg shadow-sm">
              {basket.items.map((item, index) => (
                <BasketItem
                  key={index}
                  code={item.productId}
                  currentPrice={item.price}
                  image={item.imageUrl}
                  name={item.productName}
                  option={item.colour ?? ""}
                  size={item.size ?? ""}
                  originalPrice={item.price}
                />
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 text-amber-700 bg-amber-50 p-4 rounded">
              <AlertTriangle size={20} />
              <p>
                Items in your basket are not reserved. Checkout now to avoid
                disappointment.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <OrderSummary
              itemsTotal={basket.subTotal ?? 0}
              savings={0}
              subtotal={basket.subTotal ?? 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
export const dynamic = 'force-dynamic'