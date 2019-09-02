import ProductPresenter from "./productPresenter";
import { withRouter } from "next/dist/client/router";
import { Query } from "react-apollo";
import { PRODUCT_QUERY } from "../../queries/productQueries";

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
          return <ProductPresenter product={product} />;
        }}
      </Query>
    );
  }
}

export default withRouter(ProductContainer);
