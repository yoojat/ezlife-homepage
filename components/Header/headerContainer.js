import HeaderPresenter from "./headerPresenter";
import { slide as Menu } from "react-burger-menu";
import "./sideBarStyles.css";
import styled from "styled-components";

const ExtendedMenu = styled(Menu)``;

class HeaderContainer extends React.Component {
  render() {
    return (
      <>
        <ExtendedMenu right>
          <a id="home" className="menu-item" href="/">
            회사소개
          </a>
          <a id="about" className="menu-item" href="/about">
            제품소개
          </a>
          <a id="contact" className="menu-item" href="/contact">
            정부지원제도
          </a>
          <a id="contact" className="menu-item" href="/contact">
            고객센터
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            사이트맵
          </a>
          <a onClick={this.showSettings} className="menu-item--small" href="">
            오시는 길
          </a>
        </ExtendedMenu>
        <HeaderPresenter />
      </>
    );
  }
}

export default HeaderContainer;
