import { CartFieldsFragment } from "../fragments/CartFieldsFragment";
import { graphql } from "../graphql";

const GetBasketQuery = graphql(
  `
    query GetBasket($cartId: String!) {
      site {
        cart(entityId: $cartId) {
          ...CartFields

          metafields(
            namespace: "bc_storefront"
            keys: ["CartItemWarehouses"]
            first: 2
          ) {
            edges {
              node {
                key
                id
                value
              }
            }
          }
        }
      }
    }
  `,
  [CartFieldsFragment]
);

export { GetBasketQuery };
