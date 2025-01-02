import { IProduct } from "@/lib/models";

type ProductDetailsProps = {
  product: IProduct;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Product Details</h2>
        <p>{product.description}</p>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Key Features</h3>
        <div className="grid grid-cols-3 gap-4"></div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Specifications</h3>
        <dl className="space-y-4"></dl>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Fabric Composition</h3>
      </div>
    </div>
  );
}
