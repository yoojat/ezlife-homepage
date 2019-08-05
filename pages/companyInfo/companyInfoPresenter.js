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
  @media (max-width: 600px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const LeftMenu = styled.div`
  display: inline-block;
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
  display: inline-block;
  width: 70%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  background-color: powderblue;
  @media (max-width: 600px) {
    width: 95%;
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

const MenuItem = styled.div`
  &:hover {
    background-color: ${props => props.theme.lightBlue};
    color: white;
    cursor: pointer;
  }
  line-height: 3rem;
  padding-left: 2rem;
  font-size: 1.1rem;
  background-color: ${props => props.theme.whiteGray};
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

export default ({}) => (
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
            <MenuItem>인사말</MenuItem>
            <MenuItem>주요사업</MenuItem>
            <MenuItem>오시는 길</MenuItem>
          </MenuSubContainer>
        </MenuContainer>
      </LeftMenu>
      <RightContentContainer>컨텐츠 섹션</RightContentContainer>
    </ContentSection>
  </>
);
