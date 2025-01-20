import { executeGql } from "@/lib/api";
import { AddItemToCartMutation } from "@/lib/graphql/mutations/AddItemToCartMutation";
import { CreateCartMutation } from "@/lib/graphql/mutations/CreateCartMutation";
import { VariantFromOptionsQuery } from "@/lib/graphql/queries";
import { defaultSession, SessionData } from "@/lib/session";
import { getIronSession, IronSession } from "iron-session";
import { cookies } from "next/headers";

async function getIronSessionData(): Promise<IronSession<SessionData>> {
  const session = await getIronSession<SessionData>(await cookies(), {
    password: process.env.IRON_PASSWORD as string,
    cookieName: process.env.IRON_NAME as string,
  });
  return session ?? defaultSession;
}
export async function POST(request: Request) {
  const { productId, quantity, _options } = await request.json();
  //TODO: Read warehouse here
  const options: {
    optionId: number;
    optionValue: number;
  }[] = _options ?? [];

  // get Variant
  const variant = await executeGql(VariantFromOptionsQuery, {
    productId,
    options: options.flatMap((o) => ({
      valueEntityId: o.optionValue,
      optionEntityId: o.optionId,
    })),
  });
  const variantId =
    variant.data?.site.product?.variants.edges?.[0].node.entityId;

  const session = await getIronSessionData();
  let setCookie: string[] = [];

  if (session.cartId) {
    const result = await executeGql(AddItemToCartMutation, {
      cartId: session.cartId,
      productId,
      quantity,
      variantId,
    });
    session.cartId = result.data.cart.addCartLineItems?.cart?.entityId;
    if (result.extensions["sessionId"] as string) {
      session.sessionId = result.extensions["sessionId"] as string;
    }
    if (result.extensions["sessionRot"] as string) {
      session.sessionRotation = result.extensions["sessionRot"] as string;
    }
    if (result.extensions["hostSessionRot"] as string) {
      session.hostRotation = result.extensions["hostSessionRot"] as string;
    }
    setCookie = (result.extensions["Set-Cookie"] as string[]) ?? [];
  } else {
    const result = await executeGql(CreateCartMutation, {
      productId,
      quantity,
      variantId,
    });

    session.cartId = result.data.cart.createCart?.cart?.entityId;
    if (result.extensions["sessionId"] as string) {
      session.sessionId = result.extensions["sessionId"] as string;
    }
    if (result.extensions["sessionRot"] as string) {
      session.sessionRotation = result.extensions["sessionRot"] as string;
    }
    if (result.extensions["hostSessionRot"] as string) {
      session.hostRotation = result.extensions["hostSessionRot"] as string;
    }
    setCookie = (result.extensions["Set-Cookie"] as string[]) ?? [];
  }

  await session.save();

  const response = new Response(null, {
    status: 200,
  });

  setCookie.forEach((c) => response.headers.append("Set-Cookie", c));

  return response;
}
