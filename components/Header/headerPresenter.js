import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  max-width: 680px;
  margin: auto;
`;

const HeaderIn = styled.div`
  width: 100%;
`;
const LogoItem = styled.div`
  float: left;
`;

const Logo = styled.img`
  height: 100px;
`;
const Nav = styled.nav`
  float: right;
  display: table;
  height: 100px;
`;

const Gnb = styled.ul`
  vertical-align: middle;
  height: 100px;
  display: table-cell;
`;

const MenuItem = styled.li`
  float: left;
  margin-left: 10px;
  margin-right: 10px;
`;

const GnbD1 = styled.div``;

const GnbD1Extended = styled(GnbD1)``;

export default () => (
  <Header>
    <HeaderIn>
      <LogoItem>
        <Link href={"/"}>
          <a>
            <Logo src={"/static/img/brand/logoWithText.png"} />
          </a>
        </Link>
      </LogoItem>

      <Nav>
        <Gnb>
          <MenuItem>
            <Link href={"/"}>
              <a>
                <GnbD1>회사소개</GnbD1>
              </a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/"}>
              <a>
                <GnbD1Extended>제품소개</GnbD1Extended>
              </a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/"}>
              <a>
                <GnbD1>정부지원제도</GnbD1>
              </a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/"}>
              <a>
                <GnbD1>고객센터</GnbD1>
              </a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/"}>
              <a>
                <GnbD1>사이트맵</GnbD1>
              </a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/"}>
              <a>
                <GnbD1>오시는 길</GnbD1>
              </a>
            </Link>
          </MenuItem>
        </Gnb>
      </Nav>
    </HeaderIn>
  </Header>
);
