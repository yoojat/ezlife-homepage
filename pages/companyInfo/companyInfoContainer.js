import CompanyInfoPresenter from "./companyInfoPresenter";
import withLayout from "../../components/withLayout";

class CompanyInfoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <CompanyInfoPresenter />;
  }
}

export default withLayout(CompanyInfoContainer);
