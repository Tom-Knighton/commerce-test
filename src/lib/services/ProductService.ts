import { client } from "../api";
import { IProduct } from "../models";

const getProductById = async (id: number): Promise<IProduct | null> => {
  try {
    const response = await client.get<IProduct>(`Product/${id}`);

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getProductById };
