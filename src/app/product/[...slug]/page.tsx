import { ProductDetails } from "@/components/pdp/ProductDetails";
import { ProductGallery } from "@/components/pdp/ProductGallery";
import { ProductInfo } from "@/components/pdp/ProductInfo";
import { executeGql } from "@/lib/api";
import {
  ImageFieldsFragment,
  ProductFieldFragments,
} from "@/lib/graphql/fragments";
import { readFragment } from "@/lib/graphql/graphql";
import { getProductQuery } from "@/lib/graphql/queries";
import { defaultSession, SessionData } from "@/lib/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface IProductPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

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
    getProductQuery,
    {
      productId: Number.parseInt(productId),
    },
    session
  );
  const product = readFragment(
    ProductFieldFragments,
    productQuery.data.site.product
  );
  if (!product) redirect("/");

  const imageUrls =
    product.images.edges?.flatMap(
      (i) => readFragment(ImageFieldsFragment, i.node).url960wide
    ) ?? [];

  return (
    <div className="container py-10 px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <ProductGallery images={imageUrls} productName={product.name} />
        <ProductInfo product={product} />
      </div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;
export const dynamic = "force-dynamic";
