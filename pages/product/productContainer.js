import ProductPresenter from "./productPresenter";
import withLayout from "../../components/withLayout";

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <ProductPresenter />;
  }
}

export default withLayout(ProductContainer);
