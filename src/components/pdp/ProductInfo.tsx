"use client";

import { Button } from "@/components/ui/button";
import {
  MoneyFieldsFragment,
  ProductFieldFragments,
  ProductOptionsFragment,
} from "@/lib/graphql/fragments";
import { readFragment, ResultOf } from "gql.tada";
import { useMemo, useState } from "react";
import ProductOptionSelect from "./ProductOption";

type ProductInfoProps = {
  product: ResultOf<typeof ProductFieldFragments>;
};

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Map<number, number>>(
    new Map<number, number>()
  );

  const getPricing = useMemo(():
    | ResultOf<typeof MoneyFieldsFragment>
    | undefined => {
    return readFragment(MoneyFieldsFragment, product.prices?.price);
  }, [product]);

  const AddToBasket = async () => {
    const selectedOptions = Array.from(
      selectedIds,
      ([optionId, optionValue]) => ({
        optionId,
        optionValue,
      })
    );
    await fetch(`api/AddItemToBasket`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        productId: product.entityId,
        quantity: 1,
        warehouse: "AAX",
        options: selectedOptions,
      }),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-sm text-muted-foreground">
          {product.brand?.name ?? "Mountain Warehouse"}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {"★".repeat(Math.floor(product.reviewSummary.summationOfRatings))}
          {"☆".repeat(5 - Math.floor(product.reviewSummary.summationOfRatings))}
        </div>
        <span className="text-sm text-muted-foreground">
          ({product.reviewSummary.numberOfReviews} Reviews)
        </span>
      </div>

      <div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">
            £{getPricing?.value?.toString() ?? 0}
          </span>
        </div>
      </div>

      {product.productOptions.edges?.map((node) => {
        const opt = readFragment(ProductOptionsFragment, node).node;
        return (
          <ProductOptionSelect
            option={opt}
            key={opt.entityId}
            selectedId={selectedIds.get(opt.entityId)}
            setSelected={(id) => {
              const newSelected = structuredClone(selectedIds);
              newSelected.set(opt.entityId, id);
              setSelectedIds(newSelected);
            }}
          />
        );
      })}

      <div>
        <label className="text-sm font-medium mr-4">Quantity</label>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="mt-2 w-24 rounded-md border p-2 mr-2"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <Button
        className="w-full bg-green-600 hover:bg-green-700 text-white"
        onClick={() => {
          AddToBasket();
        }}
      >
        Add to Basket
      </Button>

      <div className="space-y-2 text-sm">
        <Button variant="link" className="text-green-600">
          View Delivery Details
        </Button>
        <Button variant="link" className="text-green-600">
          View 60 Days Returns Policy
        </Button>
      </div>
    </div>
  );
}
