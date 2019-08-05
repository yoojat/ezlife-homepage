import Head from "next/head";
import styled from "styled-components";

const TopBannerContainer = styled.div`
  padding-top: 100px;
  width: 100vw;
`;

const TopBanner = styled.div`
  background-image: url("/static/img/etc/computer-1149148_1920.jpg");
  height: 170px;
  width: 100%;
  background-size: cover;
`;

const BannerTitle = styled.div`
  color: white;
  font-size: 2rem;
  margin-left: 10vw;
  margin-bottom: 0.7rem;
`;
const BannerSubTitle = styled.div`
  color: white;
  font-size: 1.1rem;
  margin-left: 10vw;
`;
const TopBannerModal = styled.div`
  height: 110px;
  width: 100%;
  position: absolute;
  top: 100px;
  background-color: rgba(0, 0, 0, 0.5); /*살짝 투명한 검정으로 배경색*/
  padding-top: 60px;
`;

const ContentSection = styled.div`
  text-align: left;
  margin-top: 3rem;
  display: table;
  @media (max-width: 600px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: inherit;
  }
`;

const LeftMenu = styled.div`
  /* display: inline-block; */
  display: table-cell;
  width: 20%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  @media (max-width: 600px) {
    display: block;
    width: 100%;
    margin-left: inherit;
    margin-right: inherit;
  }
`;
const RightContentContainer = styled.div`
  /* display: inline-block; */
  display: table-cell;
  width: 60%;
  padding: 5%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  @media (max-width: 600px) {
    width: 85%;
    padding: 5%;
  }
`;

const MenuContainer = styled.div``;
const MenuMainTitle = styled.div`
  color: white;
  background-color: ${props => props.theme.deepBlue};
  line-height: 3rem;
  padding-left: 2rem;
  font-size: 1.3rem;
  margin-bottom: 1.1rem;
  @media (max-width: 600px) {
    display: none;
  }
`;
const MenuSubContainer = styled.div`
  @media (max-width: 600px) {
    text-align: center;
  }
`;

// const JoinImg = styled("div")`
//   display: ${props =>
//     (props.selUsageOption === SIGN_UP && "inherit") || "none"};
//   width: 100%;
//   height: auto;
//   background: url("/static/img/main/ManualJoinImg.gif") no-repeat center / auto
//     100%;
// `;

const MenuItem = styled.div`
  &:hover {
    background-color: ${props => props.theme.lightBlue};
    color: white;
    cursor: pointer;
  }
  line-height: 3rem;
  padding-left: 2rem;
  font-size: 1.1rem;
  background-color: ${props =>
    props.fixNumber === props.getNumber
      ? props.theme.lightBlue
      : props.theme.whiteGray};
  color: ${props =>
    props.fixNumber === props.getNumber ? "white" : props.theme.black};
  border-bottom: 0.1rem solid #dedede;
  @media (max-width: 600px) {
    display: inline-block;
    padding-left: inherit;
    margin-left: 1.5rem;
    margin-right: 2rem;
    background-color: inherit;
    border-bottom: inherit;
    font-size: 0.8rem;

    &:hover {
      background-color: inherit;
      color: inherit;
    }
  }
`;

const GreetingTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
const GreetingText = styled.div`
  color: ${props => props.theme.lightGray};
`;
const BigLogoContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
  border: 1px solid #dedede;
  margin-bottom: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
const BigLog = styled.img`
  width: 100%;
  max-width: 500px;
`;
const AboutCompany = styled.div`
  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    &:nth-child(1) {
      background-color: ${props => props.theme.skyBlue};
      color: white;
    }
  }
`;

const GREETING = "GREETING";
const MAIN_BUSINESS = "MAIN_BUSINESS";
const COME_METHOD = "COME_METHOD";

export default ({ nowPage, onPageClick }) => (
  <>
    <Head>
      <title>이지라이프 - 이지라이프는 세상을 편리하게 만듭니다</title>
    </Head>
    <TopBannerContainer>
      <TopBanner />
      <TopBannerModal>
        <BannerTitle>EZ life</BannerTitle>
        <BannerSubTitle>
          이지라이프는 삶을 보다 편리하게 만듭니다
        </BannerSubTitle>
      </TopBannerModal>
    </TopBannerContainer>
    <ContentSection>
      <LeftMenu>
        <MenuContainer>
          <MenuMainTitle>회사소개</MenuMainTitle>

          <MenuSubContainer>
            <MenuItem
              fixNumber={GREETING}
              getNumber={nowPage}
              onClick={() => onPageClick(GREETING)}
            >
              인사말
            </MenuItem>
            <MenuItem
              fixNumber={MAIN_BUSINESS}
              getNumber={nowPage}
              onClick={() => onPageClick(MAIN_BUSINESS)}
            >
              주요사업
            </MenuItem>
            <MenuItem
              fixNumber={COME_METHOD}
              getNumber={nowPage}
              onClick={() => onPageClick(COME_METHOD)}
            >
              오시는 길
            </MenuItem>
          </MenuSubContainer>
        </MenuContainer>
      </LeftMenu>
      <RightContentContainer>
        {nowPage === GREETING && (
          <>
            <GreetingTitle>인사말</GreetingTitle>
            <GreetingText>
              이지라이프 홈페이지를 방문해주셔서 진심으로 감사드립니다
            </GreetingText>
            <BigLogoContainer>
              <BigLog src={"/static/img/brand/logoWithText.png"} />
            </BigLogoContainer>

            <AboutCompany>
              <p>
                저희 이지라이프는 장애아동을 위한 특수 목재제품, 이너, 자세유지
                및 아동보조기구 등을 유통 & 대여하는 회사입니다.
              </p>
              <p>
                부산, 강남지역에서 지역사회 서비스 투자사업(렌탈 바우처)을
                진행함으로써 지체 뇌 병병 장애인에게 반드시 필요한 고가의
                재활보조기구를 유통하므로 삶의 질을 향상시키기 위해 노력하고
                있습니다.
              </p>
              <p>
                저희는 언제나 고민합니다. 하나의 제품을 더 유통할 것인지가 아닌
                어떤 제품이 고객님께 맞는지를 고민합니다.
              </p>
              <p>
                또한 공공기관, 특수교육기관, 복지관, 병원 등 다양한 곳에도
                장애인용품을 납품하는 전문적인 회사입니다.
              </p>
              <p>
                고객님의 삶을 편하게 해드리는 것이 저희 회사가 추구하는
                바입니다. 앞으로도 고객 여러분께 필요한 양질의 제품을 공급하는데
                최선을 다하겠습니다.
              </p>
              <p>
                새로운 미래를 향해 나아가는 이지라이프의 힘찬 도전에 여러분의
                지속적인 관심과 변함없는 성원과 격려를 부탁드립니다.
              </p>
              <p>
                고객님의 가정에 행복이 가득하시고 건강하시길 기원합니다.
                감사합니다.
              </p>
            </AboutCompany>
          </>
        )}
        {nowPage === MAIN_BUSINESS && (
          <img src={"/static/img/brand/logo-icon.png"} />
        )}
      </RightContentContainer>
    </ContentSection>
  </>
);
