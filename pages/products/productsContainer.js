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
    const { selSubCategoryId, selCategoryId, doGetAllProducts } = props;
    this.state = {
      selCategoryId: selCategoryId || "",
      selSubCategoryId: selSubCategoryId || "",
      doGetAllProducts: doGetAllProducts || true
    };
  }

  render() {
    const { selCategoryId, selSubCategoryId, doGetAllProducts } = this.state;
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
              variables={{ categoryId: selCategoryId || categories[0].id }}
              skip={!doGetAllProducts}
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
                    skip={
                      doGetAllProducts ||
                      (!selSubCategoryId && subCategories.length === 0)
                    }
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

  setCategory = selCategoryId => {
    this.setState({
      selCategoryId,
      selSubCategoryId: "",
      doGetAllProducts: true
    });
  };

  setSubCategory = selSubCategoryId => {
    this.setState({
      selSubCategoryId,
      doGetAllProducts: false
    });
  };
}

export default withRouter(ProductsContainer);
