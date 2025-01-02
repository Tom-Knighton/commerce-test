import { cookies } from "next/headers";
import { client } from "../api";
import { IBasketDto } from "../models";
const AddItemToBasket = async (
  productId: string,
  quantity: number,
  warehouse: string,
  options: { optionId: string; optionValue: string }[]
): Promise<string[]> => {
  try {
    const allCookies = (await cookies()).getAll();
    const cookieString = allCookies
      .map(({ name, value }) => `${name}=${value}`)
      .join("; ");
    const response = await client.post(
      `Basket/AddToBasket`,
      {
        productId,
        quantity,
        options,
        warehouse,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieString,
        },
      }
    );

    return response.headers["set-cookie"] ?? [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const GetBasket = async (): Promise<IBasketDto> => {
  try {
    const allCookies = (await cookies()).getAll();
    const cookieString = allCookies
      .map(({ name, value }) => `${name}=${value}`)
      .join("; ");
    const response = await client.get<IBasketDto>(`Basket/GetBasket`, {
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieString,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { AddItemToBasket, GetBasket };
