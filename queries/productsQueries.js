import { gql } from "apollo-boost";

export const CATEGORYS_QUERY = gql`
  {
    categories {
      id
      name
      subCategory {
        id
        name
        category {
          id
        }
      }
    }
  }
`;

export const PRODUCTS_QUERY = gql`
  query productsQuery($subCategoryId: ID!) {
    products(
      where: { subCategory: { id: $subCategoryId } }
      orderBy: order_ASC
    ) {
      id
      name
      order
      snapshot {
        url
      }
    }
  }
`;

export const SEARCH_PRODCUTS_QUERY = gql`
  query searchProductsQuery($text: String!) {
    products(where: { name_contains: $text }) {
      id
      name
      order
      snapshot {
        url
      }
    }
  }
`;

export const BEST_PRODUCTS_QUERY = gql`
  {
    bestProducts {
      id
      product {
        id
        name
        snapshot {
          url
        }
      }
    }
  }
`;

export const CATEGORY_PRODUCTS = gql`
  query categoryProducts($categoryId: ID!) {
    products(
      where: { subCategory: { category: { id: $categoryId } } }
      orderBy: order_ASC
    ) {
      id
      name
      order
      snapshot {
        url
      }
    }
  }
`;
