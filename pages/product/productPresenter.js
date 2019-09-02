import Head from "next/head";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReactMarkdown from "react-markdown";

const MainInfoSection = styled.section`
  padding-top: 7rem;
  text-align: center;
`;
const MainInfoContainer = styled.div`
  & > * {
    vertical-align: bottom;
  }
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;
const MainImgContainer = styled.div`
  display: inline-block;
  text-align: center;
  width: 100%;
  max-width: 320px;
  @media (max-width: 513px) {
    margin-bottom: 2rem;
  }
`;
const MainImg = styled.img`
  width: 100%;
`;
const MainShortInfoContainer = styled.div`
  display: inline-block;
  text-align: left;
  margin-left: 2rem;
`;
const MainInfo = styled.div``;
const MainInfoTable = styled.div``;
const InfoItem = styled.div``;
const InfoTitle = styled.div`
  display: inline-block;
  margin-right: 2rem;
  width: 5rem;
`;
const InfoContent = styled.div`
  display: inline-block;
`;

const ProductInfoSection = styled.section`
  margin-top: 5rem;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;
const ProductInfoTitle = styled.div`
  font-size: 1.3rem;
`;
const ProductInfoImgContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 600px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
const ProductInfoImg = styled.img`
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
const ProductInfoContentContainer = styled.div``;
const ProductInfoContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 800px;
`;

export default ({ product }) => (
  <>
    <Head>
      <title>이지라이프 - 이지라이프는 세상을 편리하게 만듭니다</title>
    </Head>
    <Header />

    {product && (
      <>
        <MainInfoSection>
          <MainInfoContainer>
            <MainImgContainer>
              <MainImg src={product.mainImg.url} />
            </MainImgContainer>
            <MainShortInfoContainer>
              <MainInfo>
                <MainInfoTable>
                  <InfoItem>
                    <InfoTitle>제품명(한글)</InfoTitle>
                    <InfoContent>{product.nameKr}</InfoContent>
                  </InfoItem>
                  <InfoItem>
                    <InfoTitle>제품명(영문)</InfoTitle>
                    <InfoContent>{product.nameEn}</InfoContent>
                  </InfoItem>
                  <InfoItem>
                    <InfoTitle>제조국</InfoTitle>
                    <InfoContent>{product.madeIn}</InfoContent>
                  </InfoItem>
                  <InfoItem>
                    <InfoTitle>모델명</InfoTitle>
                    <InfoContent>{product.modelName}</InfoContent>
                  </InfoItem>
                </MainInfoTable>
              </MainInfo>
            </MainShortInfoContainer>
          </MainInfoContainer>
        </MainInfoSection>

        <ProductInfoSection>
          <ProductInfoTitle>PRODUCT INFO</ProductInfoTitle>
          <ProductInfoImgContainer>
            {product.infoImg.map(img => (
              <ProductInfoImg src={img.url} key={img.id} />
            ))}
          </ProductInfoImgContainer>
          <ProductInfoContentContainer>
            <ProductInfoContent>
              <ReactMarkdown source={product.infoText} />
            </ProductInfoContent>
          </ProductInfoContentContainer>
        </ProductInfoSection>
      </>
    )}

    <Footer />
  </>
);
