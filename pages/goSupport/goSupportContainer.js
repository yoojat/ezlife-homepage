import GoSupportPresenter from "./goSupportPresenter";
import withLayout from "../../components/withLayout";

const VOUCHER = "VOUCHER";
class GoSuportContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPage: "EXTENDED_PRODUCT"
    };
  }

  render() {
    const { nowPage } = this.state;
    return (
      <GoSupportPresenter nowPage={nowPage} onPageClick={this.onPageClick} />
    );
  }

  onPageClick = nowPage => {
    this.setState({
      nowPage
    });
  };
}

export default withLayout(GoSuportContainer);
