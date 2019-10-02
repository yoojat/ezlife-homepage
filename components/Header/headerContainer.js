import HeaderPresenter from "./headerPresenter";
import { slide as Menu } from "react-burger-menu";
import "./sideBarStyles.css";
import styled from "styled-components";
import Router from "next/router";

const ExtendedMenu = styled(Menu)``;

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: ""
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const { searchVal } = this.state;
    Router.push({ pathname: "/search", query: { searchVal } });
  };

  onSearchTextChange = event => {
    this.setState({ searchVal: event.target.value });
  };

  render() {
    const { searchVal } = this.state;
    return (
      <>
        <ExtendedMenu right>
          <a id="home" className="menu-item" href="/companyInfo">
            회사소개
          </a>
          <a id="about" className="menu-item" href="/products">
            제품소개
          </a>
          <a id="contact" className="menu-item" href="/goSupport">
            정부지원제도
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="/">
            사이트맵
          </a>
        </ExtendedMenu>
        <HeaderPresenter
          onSubmit={this.onSubmit}
          onSearchTextChange={this.onSearchTextChange}
          searchVal={searchVal}
        />
      </>
    );
  }
}

export default HeaderContainer;
