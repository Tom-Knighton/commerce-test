interface IBasketDetails {
    basketId: string;
}

interface IBasketDto {
    basketId: string;
    totalItems: number;
    subTotal: number;

    items: IBasketItem[];
}

interface IBasketItem {
    basketItemId: string;
    productId: string;
    quantity: number;
    variantId?: string;
    price: number;
    productName: string;
    sKU: string;
    imageUrl: string;
    warehouse: string;
    colour?: string;
    size?: string;
}

export type { IBasketDetails, IBasketDto, IBasketItem};