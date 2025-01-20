import { graphql } from "../graphql";

const CreateCartMutation = graphql(`
  mutation CreateBasket($productId: Int!, $variantId: Int, $quantity: Int = 1) {
    cart {
      createCart(
        input: {
          lineItems: [
            {
              productEntityId: $productId
              variantEntityId: $variantId
              quantity: $quantity
            }
          ]
        }
      ) {
        cart {
          entityId
        }
      }
    }
  }
`);

export { CreateCartMutation };
