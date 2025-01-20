import { ProductFieldFragments } from "../fragments";
import { graphql } from "../graphql";

const getProductQuery = graphql(
  `
    query productById($productId: Int!) {
      site {
        product(entityId: $productId) {
          ...ProductFields
        }
      }
    }
  `,
  [ProductFieldFragments]
);

export { getProductQuery };
