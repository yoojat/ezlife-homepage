import ProductsPresenter from "./productsPresenter";
import { Query } from "react-apollo";

import { withRouter } from "next/router";
import {
  CATEGORYS_QUERY,
  PRODUCTS_QUERY,
  CATEGORY_PRODUCTS
} from "../../queries/productsQueries";

class ProductsContainer extends React.Component {
  static async getInitialProps(props) {
    const {
      query: { selSubCategoryId, selCategoryId, doGetAllProducts }
    } = props;

    return {
      selSubCategoryId,
      selCategoryId,
      doGetAllProducts
    };
  }
  constructor(props) {
    super(props);
  }

  render() {
    const { selCategoryId, selSubCategoryId } = this.props;
    return (
      <Query query={CATEGORYS_QUERY}>
        {({ data: { categories } }) => {
          const subCategories = sortSubcategoriesByOrder(
            (categories &&
              (selCategoryId
                ? categories.find(category => category.id === selCategoryId)
                    .subCategory
                : categories[0].subCategory)) ||
              []
          );
          return (
            <Query
              query={CATEGORY_PRODUCTS}
              variables={{
                categoryId: selCategoryId || (categories && categories[0].id)
              }}
              skip={selSubCategoryId || categories === undefined}
            >
              {({ data }) => {
                const categoryProducts = sortProductsBySubCategory(
                  (data && data.products) || []
                );

                return (
                  <Query
                    query={PRODUCTS_QUERY}
                    variables={{
                      subCategoryId: selSubCategoryId
                        ? selSubCategoryId
                        : subCategories.length !== 0
                        ? subCategories[0].id
                        : ""
                    }}
                    skip={!selSubCategoryId && subCategories.length === 0}
                  >
                    {({ data }) => {
                      const products = sortProductsBySubCategory(
                        categoryProducts.length > 0
                          ? categoryProducts
                          : data
                          ? data.products
                            ? data.products
                            : []
                          : []
                      );

                      // const sortedBySubCategoryProducts = products.sort(
                      //   (a, b) => {
                      //     if (a.subCategory.id >= b.subCategory.id) {
                      //       return -1;
                      //     } else {
                      //       return 1;
                      //     }
                      //   }
                      // );
                      // console.log({ sortedBySubCategoryProducts });

                      return (
                        <ProductsPresenter
                          categories={categories}
                          selCategoryId={selCategoryId}
                          selSubCategoryId={selSubCategoryId}
                          setCategory={this.setCategory}
                          subCategories={subCategories}
                          setSubCategory={this.setSubCategory}
                          products={products}
                        />
                      );
                    }}
                  </Query>
                );
              }}
            </Query>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(ProductsContainer);

const sortProductsBySubCategory = products => {
  products.sort((a, b) => {
    if (a.subCategory.order > b.subCategory.order) {
      return 1;
    } else if (a.subCategory.order < b.subCategory.order) {
      return -1;
    } else {
      if (a.order >= b.order) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  return products;
};

const sortSubcategoriesByOrder = subCategories => {
  subCategories.sort((a, b) => {
    if (a.order >= b.order) {
      return 1;
    } else if (a.order < b.order) {
      return -1;
    }
  });
  return subCategories;
};
