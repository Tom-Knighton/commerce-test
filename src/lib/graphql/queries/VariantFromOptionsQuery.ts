import { graphql } from "../graphql";

const VariantFromOptionsQuery = graphql(`
  query GetVariantFromOptions($productId: Int!, $options: [OptionValueId!]) {
    site {
      product(entityId: $productId) {
        variants(optionValueIds: $options) {
          edges {
            node {
              entityId
              inventory {
                isInStock
                byLocation {
                  edges {
                    node {
                      isInStock
                      availableToSell
                      locationEntityCode
                      locationEntityId
                      warningLevel
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);

export { VariantFromOptionsQuery};