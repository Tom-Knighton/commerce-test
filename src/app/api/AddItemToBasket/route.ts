import { AddItemToBasket } from "@/lib/services/BasketService";

export async function POST(request: Request) {
  const { productId, warehouse, quantity, options } = await request.json();

  const setCookie = await AddItemToBasket(
    productId,
    quantity,
    warehouse,
    options
  );
  return new Response(null, {
    status: 200,
    headers: { "Set-Cookie": setCookie.join(";") },
  });
}
