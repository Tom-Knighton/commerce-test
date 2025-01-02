interface IProduct {
    id: string;
    name: string;
    description?: string;
    price: number;
    images: string[];
    brand: string;

    options: IProductOption[];
    ratingSummary: IProductRating;
}

interface IProductOption {
    id: string;
    name: string;
    isRequired: boolean;

    values: IProductOptionValue[];
}

interface IProductOptionValue {
    id: string;
    name: string;
    hex?: string;
    image?: string;
}

interface IProductRating {
    average: number;
    count: number;
}

export type { IProduct, IProductOption, IProductOptionValue };