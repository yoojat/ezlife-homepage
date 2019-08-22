import ProductsPresenter from "./productsPresenter";
import withLayout from "../../components/withLayout";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <ProductsPresenter />;
  }
}

export default withLayout(ProductsContainer);
