import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 800;
  border-bottom: 1px solid #f0f0f0;
`;

const HeaderIn = styled.div`
  @media (min-width: 1020px) {
    position: relative;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const FixedItems = styled.div`
  position: relative;
  /* z-index: 800; */
`;

// effect: OpenMenu 클릭 시, Logo 이미지변경, GoBtn 컬러 변겅, OpenMenu 닫기아이콘으로 이미지 변경
const Logo = styled.div`
  position: relative;
  display: inline-block;
  width: 125px;
  height: 56px;
  margin-left: 16px;
  text-indent: -9999px;
  background-image: url("/static/img/main/LogoBlue.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 125px auto;

  @media (min-width: 1020px) {
    margin-left: 0;
  }
`;

const GoBtn = styled.div`
  position: Absolute;
  top: 16px;
  right: 54px;
  width: 100px;
  height: 24px;
  line-height: 28px;
  text-align: center;
  font-family: BMDOHYEON, "Noto Sans KR", sans-serif;
  color: #fff;
  font-size: 12px;
  border-radius: 30px;
  background-color: #4071ff;
  @media (min-width: 1020px) {
    right: 90px;
  }
`;

// SideLeft 시작. 내용 보려면 display: none;을 지우세요!
const SideLeft = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 500;
  width: 100%;
  height: 100%;
  font-family: BMDOHYEON, "Noto Sans KR", sans-serif;
  text-align: center;
  font-size: 18px;
  background-color: #4071ff;
`;

const SNS = styled.ul`
  position: absolute;
  top: 450px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const SNSIcon = styled.li`
  display: block;
  text-indent: -9999px;
  background-repeat: no-repeat;
`;
const SNSBlog = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/static/img/header/SNSBlogWhite.png");
  background-size: 40px auto;
`;
const SNSCacao = styled.div`
  width: 40px;
  height: 40px;
  background-image: url("/static/img/header/SNSCacaoWhite.png");
  background-size: 40px auto;
`;

const Gnb = styled.ul`
  display: none;
  @media (min-width: 1020px) {
    display: block;
    position: absolute;
    top: 16px;
    right: 204px;
    height: 24px;
    display: flex;
    flex-direction: row;
    li {
      cursor: pointer;
      a:hover {
        color: #4071ff;
      }
    }
  }
`;
const GnbD1 = styled.div`
  display: block;
  width: 100px;
  font-family: BMDOHYEON, "Noto Sans KR", sans-serif;
  font-size: 15px;
  text-align: center;
  line-height: 30px;
  color: ${props => props.theme.blackColor};
  &:hover {
    color: #4071ff;
  }
`;

const GnbD1Extended = styled(GnbD1)``;
const D2 = styled.div`
  display: none;
  position: absolute;
  top: 40px;
  left: 250px;
  width: 194px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #1b1c20;
  border-radius: 3%;
  background-color: #fff;
`;
const PCSubUl = styled.ul`
  width: 180px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;
const PCBranch = styled.div`
  display: block;
  width: 90px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  color: ${props => props.theme.blackColor};
`;

const PcSNS = styled.ul`
  display: none;
  @media (min-width: 1020px) {
    position: absolute;
    top: 16px;
    right: 0;
    width: 100px;
    height: 24px;
    display: flex;
    flex-direction: row-reverse;
  }
`;
const PcSNSIcon = styled.li`
  display: block;
  margin-left: 10px;
  text-indent: -9999px;
  background-repeat: no-repeat;
`;
const PcSNSBlog = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("/static/img/header/SNSBlogBlack.png");
  background-size: 24px auto;
`;
const PcSNSCacao = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("/static/img/header/SNSCacaoBlack.png");
  background-size: 24px auto;
`;

export default () => (
  <Header>
    <HeaderIn>
      <FixedItems>
        <Link href={"/"}>
          <a>
            <Logo />
          </a>
        </Link>

        <Link href={"http://bluedotlounge.kr"}>
          <a>
            <GoBtn>이용하러 가기</GoBtn>
          </a>
        </Link>
        {/* <Link href={"/"}>
          <a>
            <OpenMenu>메뉴 열기</OpenMenu>
          </a>
        </Link> */}
      </FixedItems>
      <SideLeft>
        <SNS>
          <SNSIcon>
            <Link href={"https://blog.naver.com/bluedotlounge"}>
              <a target="_blank">
                <SNSBlog>블로그 가기</SNSBlog>
              </a>
            </Link>
          </SNSIcon>
          <SNSIcon>
            <Link href={"https://pf.kakao.com/_xmXxiru"}>
              <a target="_blank">
                <SNSCacao>카카오플러스친구로 가기</SNSCacao>
              </a>
            </Link>
          </SNSIcon>
        </SNS>
      </SideLeft>

      {/* SideLeft(Mobile용 메뉴) 끝 */}

      <nav>
        <Gnb>
          {/* <li>
            <Link href={"/"}>
              <a>
                <GnbD1>이용방법</GnbD1>
              </a>
            </Link>
          </li> */}
          <li>
            <Link scroll={true} href={"/about"}>
              <a>
                <GnbD1>회사소개</GnbD1>
              </a>
            </Link>
          </li>
          <li>
            <Link scroll={true} href={"/branch"}>
              <a>
                <GnbD1Extended>지점안내</GnbD1Extended>
              </a>
            </Link>
            <D2>
              <PCSubUl>
                <li>
                  <Link href={"/"}>
                    <a>
                      <PCBranch>화명본점</PCBranch>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <a>
                      <PCBranch>화명역점</PCBranch>
                    </a>
                  </Link>
                </li>
              </PCSubUl>
              <PCSubUl>
                <li>
                  <Link href={"/"}>
                    <a>
                      <PCBranch>동래안락점</PCBranch>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <a>
                      <PCBranch>반여점</PCBranch>
                    </a>
                  </Link>
                </li>
              </PCSubUl>
              <PCSubUl>
                <li>
                  <Link href={"/"}>
                    <a>
                      <PCBranch>명륜역점</PCBranch>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <a>
                      <PCBranch>구서점</PCBranch>
                    </a>
                  </Link>
                </li>
              </PCSubUl>
              <PCSubUl>
                <li>
                  <Link href={"/"}>
                    <a>
                      <PCBranch>울산수암점</PCBranch>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <a>
                      <PCBranch>양산중부점</PCBranch>
                    </a>
                  </Link>
                </li>
              </PCSubUl>
            </D2>
            {/* PC메뉴 지점안내 Sub 끝 */}
          </li>
          <li>
            <Link scroll={true} href={"/manual"}>
              <a>
                <GnbD1>이용방법</GnbD1>
              </a>
            </Link>
          </li>
          <li>
            <Link scroll={true} href={"/pricing"}>
              <a>
                <GnbD1>이용요금</GnbD1>
              </a>
            </Link>
          </li>
        </Gnb>
        {/* gnb(PC용 메뉴) 끝 */}
      </nav>
      <PcSNS>
        <PcSNSIcon>
          <Link href={"https://blog.naver.com/bluedotlounge"}>
            <a target="_blank">
              <PcSNSBlog>블로그 가기</PcSNSBlog>
            </a>
          </Link>
        </PcSNSIcon>
        <PcSNSIcon>
          <Link href={"https://pf.kakao.com/_xmXxiru"}>
            <a target="_blank">
              <PcSNSCacao>카카오플러스친구로 가기</PcSNSCacao>
            </a>
          </Link>
        </PcSNSIcon>
      </PcSNS>
    </HeaderIn>
  </Header>
);
