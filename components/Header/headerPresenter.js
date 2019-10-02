import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  max-width: 1280px;
  margin: auto;
`;

const HeaderIn = styled.div`
  width: 100%;
`;
const LogoItem = styled.div`
  float: left;
`;

const Logo = styled.img`
  width: 22.5vw;
  max-width: 15rem;
  min-width: 7rem;
  margin-left: 1.3rem;
  margin-top: 1.3rem;
`;
const Nav = styled.nav`
  font-size: 1.1rem;
  float: right;
  font-weight: bolder;
  display: table;
  height: 100px;
  margin-right: 1rem;
  position: relative;
`;

const Gnb = styled.ul`
  vertical-align: middle;
  height: 100px;
  display: table-cell;
  @media (max-width: 670px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  float: left;
  margin-left: 10px;
  margin-right: 10px;
`;

const GnbD1 = styled.div``;

const GnbD1Extended = styled(GnbD1)``;

const SearchContainer = styled.div`
  height: 100px;
  display: table-cell;
  vertical-align: middle;
  @media (max-width: 670px) {
    position: relative;
    right: 54px;
  }
`;

const SearchTextInput = styled.input`
  height: 21px;
  border: 1px solid #dedede;
  @media (max-width: 670px) {
    width: 80px;
  }
`;

const SearchBtn = styled.input`
  border-radius: 3px;
  width: 60px;
  background-color: ${props => props.theme.deepBlue};
  color: white;
  padding-top: 4px;
  padding-bottom: 4px;
`;

export default ({ onSubmit, onSearchTextChange, searchVal }) => (
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
            <Link href={"/companyInfo"}>
              <a>
                <GnbD1>회사소개</GnbD1>
              </a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/products"}>
              <a>
                <GnbD1Extended>제품소개</GnbD1Extended>
              </a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/goSupport"}>
              <a>
                <GnbD1>정부지원제도</GnbD1>
              </a>
            </Link>
          </MenuItem>
        </Gnb>
        <SearchContainer>
          <form>
            <SearchTextInput
              type="text"
              onChange={e => onSearchTextChange(e)}
              value={searchVal}
            />
            <SearchBtn type="submit" value="검색" onClick={e => onSubmit(e)} />
          </form>
        </SearchContainer>
      </Nav>
    </HeaderIn>
  </Header>
);
