import IndexPresenter from "./indexPresenter";
import withLayout from "../../components/withLayout";

class IndexContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return <IndexPresenter />;
  }
}

export default withLayout(IndexContainer);
