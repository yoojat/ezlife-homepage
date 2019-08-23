import ProductsPresenter from "./productsPresenter";
import { Query } from "react-apollo";

import { withRouter } from "next/router";
import { CATEGORYS_QUERY, PRODUCTS_QUERY } from "./productsQueries";

class ProductsContainer extends React.Component {
  static async getInitialProps(props) {
    const {
      query: { selSubCategoryId }
    } = props;

    return {
      selSubCategoryId
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      selCategoryId: "",
      selSubCategoryId: ""
    };
  }

  render() {
    const { selCategoryId, selSubCategoryId } = this.state;
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
                const products = data
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
  }

  setCategory = selCategoryId => {
    this.setState({
      selCategoryId
    });
  };

  setSubCategory = selSubCategoryId => {
    this.setState({
      selSubCategoryId
    });
  };
}

export default withRouter(ProductsContainer);
