import { graphql } from "../graphql";

const ProductOptionsFragment = graphql(`
  fragment ProductOptions on ProductOptionEdge {
    node {
      displayName
      isRequired
      isVariantOption
      entityId
      ... on MultipleChoiceOption {
        values(first: 10) {
          edges {
            node {
              entityId
              label
              isDefault
              ... on SwatchOptionValue {
                hexColors
                imageUrl(width: 200)
              }
            }
          }
        }
      }
    }
  }
`);

export { ProductOptionsFragment };