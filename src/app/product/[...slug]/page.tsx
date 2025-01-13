import { ProductDetails } from "@/components/pdp/ProductDetails";
import { ProductGallery } from "@/components/pdp/ProductGallery";
import { ProductInfo } from "@/components/pdp/ProductInfo";
import { executeGql } from "@/lib/api";
import { graphql } from "@/lib/graphql/graphql";
import { IProduct } from "@/lib/models";
import { defaultSession, SessionData } from "@/lib/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface IProductPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

const ProductQuery = graphql(`
  query GetProduct($productId: Int!) {
    product(productId: $productId) {
      id
      name
      description
      price
      brand
      images
      ratingSummary {
        average
        count
      }
      options {
        id
        name
        isRequired
        values {
          id
          name
          hex
          image
        }
      }
    }
  }
`);

async function getIronSessionData(): Promise<SessionData> {
  const session = await getIronSession<SessionData>(await cookies(), {
    password: process.env.IRON_PASSWORD as string,
    cookieName: process.env.IRON_NAME as string,
  });
  return session ?? defaultSession;
}

const ProductPage = async ({ params }: IProductPageProps) => {
  const [productId] = (await params).slug;
  // const [productId, ..._rest] = (await params).slug; to get the rest of the data i.e. default colour/size
  const session = await getIronSessionData();

  const productQuery = await executeGql(
    ProductQuery,
    {
      productId: Number.parseInt(productId),
    },
    session
  );
  const product = productQuery.data.product as IProduct;

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
export const dynamic = "force-dynamic";
