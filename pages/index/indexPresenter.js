import Head from "next/head";
import styled from "styled-components";
import Slider from "react-slick";
import { FiPhone } from "react-icons/fi";

const Main = styled.main`
  clear: both;
`;
const ImgContainer = styled.div``;

const Img = styled.img`
  width: 100%;
`;
const SlideSection = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: auto;
`;

const InfoSection = styled.section`
  width: 100%;
  max-width: 1280px;
  text-align: center;
  margin: auto;
  margin-top: 3rem;
`;

const BestSeller = styled.div`
  width: 98%;
  padding: 1%;
  float: left;
  @media (min-width: 680px) {
    width: 58%;
    padding: 1%;
  }
`;
const BestSellerTitle = styled.div`
  text-align: left;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.05rem solid ${props => props.theme.black};
  margin-bottom: 1rem;
`;
const BestSellerContent = styled.div`
  width: 100%;
`;
const InfoContainer = styled.div`
  text-align: center;
  width: 100%;
  display: inline-block;
`;

const CustomerInfoContainer = styled.div`
  width: 98%;
  padding: 1%;
  text-align: center;
  @media (min-width: 680px) {
    width: 38%;
    padding: 1%;
    margin-top: 6rem;
  }
  display: inline-block;
`;
const CustomerInfo = styled.div``;
const CustomerTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
`;
const CustomerSubTitle = styled.div`
  color: ${props => props.theme.lightGray};
  margin-bottom: 0.2rem;
`;
const PhoneTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
`;
const PhoneSubTitle = styled.div`
  color: ${props => props.theme.lightGray};
  margin-bottom: 1rem;
`;
const BankTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
`;
const BankNum = styled.div`
  font-size: 1.3rem;
  margin-bottom: 0.2rem;
`;
const BankOwner = styled.div`
  font-size: 1.2rem;
`;

var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false
};

export default ({}) => (
  <Main>
    <Head>
      <title>이지라이프 - 이지라이프는 세상을 편리하게 만듭니다</title>
    </Head>
    <SlideSection>
      <Slider {...settings}>
        <ImgContainer>
          <Img src={"/static/img/slideImgs/1.jpg"} />
        </ImgContainer>
        <ImgContainer>
          <Img src={"/static/img/slideImgs/2.jpg"} />
        </ImgContainer>
      </Slider>
    </SlideSection>
    <InfoSection>
      <InfoContainer>
        <BestSeller>
          <BestSellerTitle>베스트셀러</BestSellerTitle>
          <BestSellerContent>
            <Slider {...settings}>
              <ImgContainer>
                <Img src={"/static/img/slideImgs/3.png"} />
              </ImgContainer>
              <ImgContainer>
                <Img src={"/static/img/slideImgs/3.png"} />
              </ImgContainer>
            </Slider>
          </BestSellerContent>
        </BestSeller>
        <CustomerInfoContainer>
          <CustomerInfo>
            <CustomerTitle>
              이지라이프 <strong>고객센터</strong>
            </CustomerTitle>
            <CustomerSubTitle>
              궁금하신 사항은 이지라이프로 전화문의주세요
            </CustomerSubTitle>
            <PhoneTitle>
              <FiPhone /> 051-857-4987
            </PhoneTitle>
            <PhoneSubTitle>
              영업시간 평일 9시~18시 / 토,일, 공휴일 휴무
            </PhoneSubTitle>
            <BankTitle>이지라이프 계좌번호</BankTitle>
            <BankNum>101-2025-1417-00</BankNum>
            <BankOwner>부산은행/예금주 : 이지라이프 심주인</BankOwner>
          </CustomerInfo>
        </CustomerInfoContainer>
      </InfoContainer>
    </InfoSection>
  </Main>
);
