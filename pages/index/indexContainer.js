import IndexPresenter from "./indexPresenter";
import withLayout from "../../components/withLayout";
import { BEST_PRODUCTS_QUERY } from "../../queries/productsQueries";
import { Query } from "react-apollo";

class IndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Query query={BEST_PRODUCTS_QUERY}>
        {({ data }) => {
          const bestProducts = data
            ? data.bestProducts
              ? data.bestProducts
              : []
            : [];
          return <IndexPresenter bestProducts={bestProducts} />;
        }}
      </Query>
    );
  }
}

export default withLayout(IndexContainer);
