import { BasketItem } from "@/components/basket/BasketItem";
import { OrderSummary } from "@/components/basket/BasketSummary";
import { executeGql } from "@/lib/api";
import { MoneyFieldsFragment } from "@/lib/graphql/fragments";
import { CartFieldsFragment } from "@/lib/graphql/fragments/CartFieldsFragment";
import { CartPhysicalItemFragment } from "@/lib/graphql/fragments/CartPhysicalItemFragment";
import { readFragment, ResultOf } from "@/lib/graphql/graphql";
import { GetBasketQuery } from "@/lib/graphql/queries";
import { defaultSession, SessionData } from "@/lib/session";
import { getIronSession } from "iron-session";
import { AlertTriangle } from "lucide-react";
import { cookies } from "next/headers";

async function getIronSessionData(): Promise<SessionData> {
  const session = await getIronSession<SessionData>(await cookies(), {
    password: process.env.IRON_PASSWORD as string,
    cookieName: process.env.IRON_NAME as string,
  });
  return session ?? defaultSession;
}

const BasketPage = async () => {
  const session = await getIronSessionData();
  let basket: ResultOf<typeof CartFieldsFragment> | null = null;
  if (session.cartId && session.sessionId) {
    const result = await executeGql(
      GetBasketQuery,
      {
        cartId: session.cartId,
      },
      session
    );
    basket = readFragment(CartFieldsFragment, result.data.site.cart);
  }

  const subTotal = () => {
    if (basket) {
      return basket.lineItems.physicalItems.reduce((acc, item) => {
        const itemData = readFragment(CartPhysicalItemFragment, item);
        const itemPrice = readFragment(MoneyFieldsFragment, itemData.listPrice)
          .value as number;
        return acc + itemPrice;
      }, 0);
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {basket && (
              <>
                <h1 className="text-2xl font-semibold mb-4">
                  Your Shopping Basket ({basket.lineItems.totalQuantity}
                  Items)
                </h1>

                <div className="bg-white rounded-lg shadow-sm">
                  {basket.lineItems.physicalItems.map((node, index) => {
                    const item = readFragment(CartPhysicalItemFragment, node);
                    return (
                      <BasketItem
                        key={index}
                        code={item.entityId}
                        currentPrice={
                          (readFragment(MoneyFieldsFragment, item.listPrice)
                            .value as number) ?? 0
                        }
                        image={item.image?.url960wide ?? ""}
                        name={item.name}
                        option={""}
                        size={""}
                        // option={item.colour ?? ""}
                        // size={item.size ?? ""}
                        originalPrice={
                          (readFragment(MoneyFieldsFragment, item.listPrice)
                            .value as number) ?? 0
                        }
                      />
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center gap-2 text-amber-700 bg-amber-50 p-4 rounded">
                  <AlertTriangle size={20} />
                  <p>
                    Items in your basket are not reserved. Checkout now to avoid
                    disappointment.
                  </p>
                </div>

                <div className="lg:col-span-1">
                  <OrderSummary
                    itemsTotal={subTotal() ?? 0}
                    savings={0}
                    subtotal={subTotal() ?? 0}
                  />
                </div>
              </>
            )}
            {!basket && (
              <>
                <span>You don&apos;t have any items in your basket yet</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
export const dynamic = "force-dynamic";
