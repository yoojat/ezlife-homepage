import ProductPresenter from "./productPresenter";
import Router, { withRouter } from "next/dist/client/router";
import { Query } from "react-apollo";
import { PRODUCT_QUERY } from "../../queries/productQueries";
import { PRODUCTS_QUERY, CATEGORYS_QUERY } from "../../queries/productsQueries";

class ProductContainer extends React.Component {
  static async getInitialProps(props) {
    const {
      query: { id }
    } = props;

    return {
      id
    };
  }

  render() {
    const { id } = this.props;
    return (
      <Query
        query={PRODUCT_QUERY}
        variables={{
          id
        }}
      >
        {({ data: { product } }) => {
          return (
            <Query query={CATEGORYS_QUERY}>
              {({ data: { categories } }) => {
                const subCategories =
                  categories && product
                    ? categories.find(
                        category =>
                          category.id === product.subCategory.category.id
                      ).subCategory
                    : "";

                return (
                  <ProductPresenter
                    product={product}
                    subCategories={subCategories}
                    categories={categories}
                    onSubCategoryClick={this.onSubCategoryClick}
                    onCategoryClick={this.onCategoryClick}
                  />
                );
              }}
            </Query>
          );
        }}
      </Query>
    );
  }

  onSubCategoryClick = selSubCategoryId => {
    Router.push({ pathname: "/products", query: { selSubCategoryId } });
  };

  onCategoryClick = selCategoryId => {
    Router.push({ pathname: "/products", query: { selCategoryId } });
  };
}

export default withRouter(ProductContainer);
