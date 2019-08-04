import Head from "next/head";
import styled from "styled-components";
import Slider from "react-slick";

const Main = styled.main`
  clear: both;
`;
const ImgContainer = styled.div``;

const Img = styled.img`
  width: 100%;
`;
const SlideSection = styled.section`
  width: 100%;
  max-width: 680px;
  margin: auto;
`;

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
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
        <ImgContainer>
          <Img src={"/static/img/slideImgs/3.jpg"} />
        </ImgContainer>
        <ImgContainer>
          <Img src={"/static/img/slideImgs/4.jpg"} />
        </ImgContainer>
        <ImgContainer>
          <Img src={"/static/img/slideImgs/5.jpg"} />
        </ImgContainer>
        <ImgContainer>
          <Img src={"/static/img/slideImgs/6.jpg"} />
        </ImgContainer>
      </Slider>
    </SlideSection>
  </Main>
);
