import { client } from "../api";
import { IBasketDto } from "../models";
const AddItemToBasket = async (
  productId: string,
  quantity: number,
  warehouse: string,
  options: { optionId: string; optionValue: string }[]
): Promise<string[]> => {
  try {

    const response = await client.post(
      `Basket/AddToBasket`,
      {
        productId,
        quantity,
        options,
        warehouse,
      },

    );

    return response.headers["set-cookie"] ?? [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const GetBasket = async (): Promise<IBasketDto | undefined> => {
  try {

    const response = await client.get<IBasketDto>(`Basket/GetBasket`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export { AddItemToBasket, GetBasket };
