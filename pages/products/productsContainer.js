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
    const { doGetAllProducts } = props;
    this.state = {
      doGetAllProducts: doGetAllProducts || true
    };
  }

  render() {
    const { doGetAllProducts } = this.state;
    const { selCategoryId, selSubCategoryId } = this.props;
    return (
      <Query query={CATEGORYS_QUERY}>
        {({ data: { categories } }) => {
          const subCategories =
            (categories &&
              (selCategoryId
                ? categories.find(category => category.id === selCategoryId)
                    .subCategory
                : categories[0].subCategory)) ||
            [];

          return (
            <Query
              query={CATEGORY_PRODUCTS}
              variables={{
                categoryId: selCategoryId || (categories && categories[0].id)
              }}
              // skip={!doGetAllProducts || categories === undefined}
              skip={selSubCategoryId || categories === undefined}
            >
              {({ data }) => {
                const categoryProducts = (data && data.products) || [];
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
                      const products =
                        categoryProducts.length > 0
                          ? categoryProducts
                          : data
                          ? data.products
                            ? data.products
                            : []
                          : [];

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
