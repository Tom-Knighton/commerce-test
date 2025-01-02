import { ProductDetails } from "@/components/pdp/ProductDetails";
import { ProductGallery } from "@/components/pdp/ProductGallery";
import { ProductInfo } from "@/components/pdp/ProductInfo";
import { getProductById } from "@/lib/services/ProductService";
import { redirect } from "next/navigation";

interface IProductPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

const ProductPage = async ({ params }: IProductPageProps) => {
  const [productId] = (await params).slug;
  // const [productId, ..._rest] = (await params).slug; to get the rest of the data i.e. default colour/size

  const product = await getProductById(Number.parseInt(productId)).catch(
    (error) => {
      console.error(error);
      redirect("/");
    }
  );

  if (!product) redirect("/");

  return (
    <div className="container py-10 px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <ProductGallery images={product.images} productName={product.name} />
        <ProductInfo product={product} />
      </div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;
export const dynamic = 'force-dynamic'