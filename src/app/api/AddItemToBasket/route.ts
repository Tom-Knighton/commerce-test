import { executeGql } from "@/lib/api";
import { graphql } from "@/lib/graphql/graphql";
import { defaultSession, SessionData } from "@/lib/session";
import { getIronSession, IronSession } from "iron-session";
import { cookies } from "next/headers";

const AddToBasket = graphql(`
  mutation AddToBasket(
    $productId: String!
    $quantity: Int!
    $warehouse: String!
    $options: [AddItemToBasketOptionInput!]!
  ) {
    basket {
      addItemToBasket(
        request: {
          options: $options
          productId: $productId
          quantity: $quantity
          warehouse: $warehouse
        }
      )
    }
  }
`);

async function getIronSessionData(): Promise<IronSession<SessionData>> {
  const session = await getIronSession<SessionData>(await cookies(), {
    password: process.env.IRON_PASSWORD as string,
    cookieName: process.env.IRON_NAME as string,
  });
  return session ?? defaultSession;
}
export async function POST(request: Request) {
  const { productId, warehouse, quantity, options } = await request.json();

  const session = await getIronSessionData();
  const result = await executeGql(
    AddToBasket,
    {
      productId,
      warehouse,
      quantity,
      options,
    },
    session
  );
  const basketId = result.data.basket.addItemToBasket;
  
  session.cartId = basketId;
  if (result.extensions['sessionId'] as string) {
    session.sessionId = result.extensions['sessionId'] as string;
  }
  if (result.extensions['sessionRot'] as string) {
    session.sessionRotation = result.extensions['sessionRot'] as string;
  }
  if (result.extensions['hostSessionRot'] as string) {
    session.hostRotation = result.extensions['hostSessionRot'] as string;
  }

  const setCookie = result.extensions['Set-Cookie'] as string[];
  await session.save();

  const response = new Response(null, {
    status: 200,
  });

  setCookie.forEach((c) => response.headers.append("Set-Cookie", c));

  return response;
}
