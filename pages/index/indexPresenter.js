import Head from "next/head";
import styled from "styled-components";
import Slider from "react-slick";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";

const Main = styled.main`
  clear: both;
`;
const ImgContainer = styled.div`
  max-width: 250px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
`;
const SlideSection = styled.section`
  background-image: url("/static/img/etc/computer-1149148_1920.jpg");
  width: 100%;
  height: 170px;
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  background-size: cover;
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
  margin-top: 60px;
  width: 100%;
`;

const BestSellProductTitle = styled.div`
  margin-top: 20px;
  font-size: 14px;
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
    margin-top: 4rem;
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
  margin-bottom: 1rem;
`;
const PhoneTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
`;
const PhoneSubTitle = styled.div`
  color: ${props => props.theme.lightGray};
  margin-bottom: 1.5rem;
`;
const BankTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;
const BankNum = styled.div`
  font-size: 1.3rem;
  margin-bottom: 1rem;
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

export default ({ bestProducts }) => (
  <Main>
    <Head>
      <title>이지라이프 - 이지라이프는 세상을 편리하게 만듭니다</title>
    </Head>
    <SlideSection></SlideSection>
    <InfoSection>
      <InfoContainer>
        <BestSeller>
          <BestSellerTitle>베스트셀러</BestSellerTitle>
          <BestSellerContent>
            <Slider {...settings}>
              {bestProducts.map(product => (
                <ImgContainer key={product.id}>
                  <Link href={`/product?id=${product.product.id}`}>
                    <a>
                      <Img src={product.product.snapshot.url} />
                      <BestSellProductTitle>
                        {product.product.name}
                      </BestSellProductTitle>
                    </a>
                  </Link>
                </ImgContainer>
              ))}
              {/* <ImgContainer>
                <Img src={"/static/img/slideImgs/2019-05-01 12;57;05.JPG"} />
                <BestSellProductTitle>레포차일드</BestSellProductTitle>
              </ImgContainer>
              <ImgContainer>
                <Img src={"/static/img/slideImgs/미그논.BMP"} />
                <BestSellProductTitle>미그논</BestSellProductTitle>
              </ImgContainer>
              <ImgContainer>
                <Img src={"/static/img/slideImgs/스페셜 시트_이너.JPG"} />
                <BestSellProductTitle>스페셜 시트 이너</BestSellProductTitle>
              </ImgContainer>
              <ImgContainer>
                <Img src={"/static/img/slideImgs/프론 스텐더(수동).JPG"} />
                <BestSellProductTitle>프론 스텐더(수동)</BestSellProductTitle>
              </ImgContainer> */}
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
