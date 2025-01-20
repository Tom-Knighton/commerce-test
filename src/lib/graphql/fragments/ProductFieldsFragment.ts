import { graphql } from "../graphql";
import { ImageFieldsFragment } from "./ImageFieldsFragment";
import { MoneyFieldsFragment } from "./MoneyFieldsFragment";
import { ProductOptionsFragment } from "./ProductOptionsFragment";

const ProductFieldFragments = graphql(`
  fragment ProductFields on Product {
    id
    entityId
    name
    plainTextDescription
    defaultImage {
      ...ImageFields
    }
    images {
      edges {
        node {
          ...ImageFields
        }
      }
    }
    reviewSummary {
      summationOfRatings
      numberOfReviews
    }
    prices {
      price {
        ...MoneyFields
      }
      priceRange {
        min {
          ...MoneyFields
        }
        max {
          ...MoneyFields
        }
      }
      salePrice {
        ...MoneyFields
      }
      retailPrice {
        ...MoneyFields
      }
      saved {
        ...MoneyFields
      }
      bulkPricing {
        minimumQuantity
        maximumQuantity
        ... on BulkPricingFixedPriceDiscount {
          price
        }
        ... on BulkPricingPercentageDiscount {
          percentOff
        }
        ... on BulkPricingRelativePriceDiscount {
          priceAdjustment
        }
      }
    }
    brand {
      name
    }
    reviewSummary {
      summationOfRatings
      numberOfReviews
    }
    productOptions {
      edges {
        ...ProductOptions
      }
    }
  }
`, [ImageFieldsFragment, MoneyFieldsFragment, ProductOptionsFragment]);

export { ProductFieldFragments };