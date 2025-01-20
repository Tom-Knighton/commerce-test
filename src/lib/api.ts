"use server";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { print } from "graphql";
import { SessionData } from "./session";

interface IGraphqlExecutionResponse<T> {
  data: T;
  errors: string[];
  extensions: { [key: string]: string | string[] };
}
const executeGql = async <T, TVars>(
  document: TypedDocumentNode<T, TVars>,
  variables: TVars,
  session: SessionData | undefined = undefined
): Promise<IGraphqlExecutionResponse<T>> => {
  const cookies = [];
  if (session) {
    if (session.sessionId) {
      cookies.push(`SHOP_SESSION_TOKEN=${session.sessionId}`);
    }
    if (session.sessionRotation) {
      cookies.push(`SHOP_SESSION_ROTATION_TOKEN=${session.sessionRotation}`);
    }
    if (session.hostRotation) {
      cookies.push(
        `__HOST-SHOP_SESSION_ROTATION_TOKEN=${session.hostRotation}`
      );
    }
    if (session.cartId) {
      cookies.push(`BasketId=${session.cartId}`);
    }
  }

  const cookieHeader = cookies.join("; ");

  const response = await fetch(process.env.API_BASE_URL as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        process.env.BIGCOMMERCE_STOREFRONT_TOKEN as string
      }`,
      cookie: cookieHeader,
    },
    credentials: "include",
    body: JSON.stringify({
      query: print(document),
      variables,
    }),
  });

  let extensions = {};
  const setCookieHeaders = response.headers.getSetCookie();
  if (setCookieHeaders) {
    const sessionId = setCookieHeaders.findLast((x) =>
      x.startsWith("SHOP_SESSION_TOKEN=")
    );
    const sessionRot = setCookieHeaders.findLast((x) =>
      x.startsWith("SHOP_SESSION_ROTATION_TOKEN=")
    );
    const hostSessionRot = setCookieHeaders.findLast((x) =>
      x.startsWith("__HOST-SHOP_SESSION_ROTATION_TOKEN=")
    );
    if (sessionId) {
      const cookie = sessionId.split(";");
      const token = cookie[0].split("=")[1];
      extensions = {
        ...extensions,
        sessionId: token,
      };
    }
    if (sessionRot) {
      const cookie = sessionRot.split(";");
      const token = cookie[0].split("=")[1];
      extensions = {
        ...extensions,
        sessionRot: token,
      };
    }
    if (hostSessionRot) {
      const cookie = hostSessionRot.split(";");
      const token = cookie[0].split("=")[1];
      extensions = {
        ...extensions,
        hostSessionRot: token,
      };
    }
    extensions = {
      ...extensions,
      "Set-Cookie": setCookieHeaders,
    };
  }

  // Parse the response
  const result = await response.json();

  return {
    data: result.data as T,
    errors: [],
    extensions,
  };
};

// // For mutations
// export async function executeMutation(
//   mutation: string,
//   variables: Record<string, any> = {}
// ) {
//   const { data } = await client.mutate({
//     mutation: gql`
//       ${mutation}
//     `,
//     variables,
//   });
//   return data;
// }

export { executeGql };
