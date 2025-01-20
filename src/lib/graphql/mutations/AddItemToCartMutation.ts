import { CartFieldsFragment } from "../fragments/CartFieldsFragment";
import { graphql } from "../graphql";

const AddItemToCartMutation = graphql(
  `
    mutation AddItemToBasket(
      $cartId: String!
      $productId: Int!
      $variantId: Int
      $quantity: Int = 1
    ) {
      cart {
        addCartLineItems(
          input: {
            cartEntityId: $cartId
            data: {
              lineItems: [
                {
                  productEntityId: $productId
                  quantity: $quantity
                  variantEntityId: $variantId
                }
              ]
            }
          }
        ) {
          cart {
            entityId
          }
        }
      }
    }
  `,
  [CartFieldsFragment]
);

export { AddItemToCartMutation };
