import SearchPresenter from "./searchPresenter";
import { withRouter } from "next/dist/client/router";
import { Query } from "react-apollo";
import { SEARCH_PRODCUTS_QUERY } from "../../queries/productsQueries";

class SearchContainer extends React.Component {
  static async getInitialProps(props) {
    const {
      query: { searchVal }
    } = props;

    return {
      searchVal
    };
  }

  render() {
    const { searchVal } = this.props;
    console.log({ searchVal });
    return (
      <Query
        query={SEARCH_PRODCUTS_QUERY}
        variables={{
          text: searchVal
        }}
      >
        {({ data: { products } }) => {
          return <SearchPresenter products={products} />;
        }}
      </Query>
    );
  }
}

export default withRouter(SearchContainer);
