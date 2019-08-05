import CompanyInfoPresenter from "./companyInfoPresenter";
import withLayout from "../../components/withLayout";

const GREETING = "GREETING";
class CompanyInfoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPage: GREETING
    };
  }

  render() {
    const { nowPage } = this.state;
    return (
      <CompanyInfoPresenter nowPage={nowPage} onPageClick={this.onPageClick} />
    );
  }

  onPageClick = nowPage => {
    this.setState({
      nowPage
    });
  };
}

export default withLayout(CompanyInfoContainer);
