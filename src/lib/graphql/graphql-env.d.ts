/* eslint-disable */
/* prettier-ignore */

export type introspection_types = {
    'AddItemToBasketOptionInput': { kind: 'INPUT_OBJECT'; name: 'AddItemToBasketOptionInput'; isOneOf: false; inputFields: [{ name: 'optionId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'optionValue'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'AddItemToBasketRequestInput': { kind: 'INPUT_OBJECT'; name: 'AddItemToBasketRequestInput'; isOneOf: false; inputFields: [{ name: 'productId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }, { name: 'quantity'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; }; defaultValue: null }, { name: 'options'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'INPUT_OBJECT'; name: 'AddItemToBasketOptionInput'; ofType: null; }; }; }; }; defaultValue: null }, { name: 'warehouse'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; defaultValue: null }]; };
    'BasketDto': { kind: 'OBJECT'; name: 'BasketDto'; fields: { 'basketId': { name: 'basketId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'items': { name: 'items'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'BasketItem'; ofType: null; }; }; }; } }; 'subTotal': { name: 'subTotal'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null; }; } }; 'totalItems': { name: 'totalItems'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; }; };
    'BasketItem': { kind: 'OBJECT'; name: 'BasketItem'; fields: { 'basketItemId': { name: 'basketItemId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'colour': { name: 'colour'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'imageUrl': { name: 'imageUrl'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'price': { name: 'price'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null; }; } }; 'productId': { name: 'productId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'productName': { name: 'productName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'quantity': { name: 'quantity'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'selectedOptions': { name: 'selectedOptions'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'BasketItemOption'; ofType: null; }; }; }; } }; 'size': { name: 'size'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'sku': { name: 'sku'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'variantId': { name: 'variantId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'warehouse': { name: 'warehouse'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'BasketItemOption': { kind: 'OBJECT'; name: 'BasketItemOption'; fields: { 'optionId': { name: 'optionId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'optionName': { name: 'optionName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'optionValue': { name: 'optionValue'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'optionValueId': { name: 'optionValueId'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'BasketMutations': { kind: 'OBJECT'; name: 'BasketMutations'; fields: { 'addItemToBasket': { name: 'addItemToBasket'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'generateCheckoutLink': { name: 'generateCheckoutLink'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'Boolean': unknown;
    'Category': { kind: 'OBJECT'; name: 'Category'; fields: { 'categoryName': { name: 'categoryName'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'path': { name: 'path'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'Decimal': unknown;
    'Float': unknown;
    'Int': unknown;
    'Mutation': { kind: 'OBJECT'; name: 'Mutation'; fields: { 'basket': { name: 'basket'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'BasketMutations'; ofType: null; }; } }; }; };
    'Product': { kind: 'OBJECT'; name: 'Product'; fields: { 'brand': { name: 'brand'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'images': { name: 'images'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; }; }; } }; 'name': { name: 'name'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'options': { name: 'options'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'ProductOption'; ofType: null; }; }; }; } }; 'price': { name: 'price'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Decimal'; ofType: null; }; } }; 'ratingSummary': { name: 'ratingSummary'; type: { kind: 'OBJECT'; name: 'ProductRatingSummary'; ofType: null; } }; }; };
    'ProductOption': { kind: 'OBJECT'; name: 'ProductOption'; fields: { 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'isRequired': { name: 'isRequired'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; }; } }; 'name': { name: 'name'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'values': { name: 'values'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'ProductOptionValue'; ofType: null; }; }; }; } }; }; };
    'ProductOptionValue': { kind: 'OBJECT'; name: 'ProductOptionValue'; fields: { 'hex': { name: 'hex'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'id': { name: 'id'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'image': { name: 'image'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'name': { name: 'name'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; }; };
    'ProductRatingSummary': { kind: 'OBJECT'; name: 'ProductRatingSummary'; fields: { 'average': { name: 'average'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Float'; ofType: null; }; } }; 'count': { name: 'count'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; }; };
    'Query': { kind: 'OBJECT'; name: 'Query'; fields: { 'basket': { name: 'basket'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'BasketDto'; ofType: null; }; } }; 'categories': { name: 'categories'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'LIST'; name: never; ofType: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'Category'; ofType: null; }; }; }; } }; 'product': { name: 'product'; type: { kind: 'OBJECT'; name: 'Product'; ofType: null; } }; }; };
    'String': unknown;
};

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: never;
  query: 'Query';
  mutation: 'Mutation';
  subscription: never;
  types: introspection_types;
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}