'use server';
import { client } from "../api";
import { ICategory } from "../models";

export const GetL1Categories = async(): Promise<ICategory[]> => {
    try {
        const response = await client.get<ICategory[]>(`Categories/L1`);
        return response.data;
    } catch(error) {
        console.error(error);
        return [];
    }
}