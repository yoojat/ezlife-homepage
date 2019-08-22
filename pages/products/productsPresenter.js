import Head from "next/head";
import styled from "styled-components";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle
} from "react-icons/io";

const CategorySection = styled.section`
  padding-top: 7rem;
`;
const CategroyContainer = styled.div`
  background-image: url("/static/img/etc/lavender-4348354_1920.jpg");
  @media (max-width: 420px) {
    background-image: inherit;
  }
  text-align: center;
`;
const CategoryItemContainer = styled.div`
  display: inline-block;
  padding-top: 3rem;
  padding-bottom: 3rem;
  width: 80%;
  max-width: 700px;
  min-width: 300px;
  text-align: center;
  @media (max-width: 420px) {
    padding-top: inherit;
    padding-bottom: inherit;
  }
`;
const CategoryItem = styled.div`
  display: inline-block;
  background-color: ${props => props.theme.whiteGray};
  width: 200px;
  margin: 0.1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.lightBlack};
    color: white;
  }
  @media (max-width: 420px) {
    width: 32%;
    font-size: 11px;
  }
`;

const SubCategorySection = styled.section`
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
`;
const SubCategoryContainer = styled.div`
  display: inline-block;
  width: 90%;
  min-width: 300px;
  border: 1px solid ${props => props.theme.black};
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  @media (max-width: 420px) {
    border: inherit;
    font-size: 11px;
  }
`;
const SubCategoryItem = styled.div`
  display: inline-block;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.skyBlue};
  }
`;

const ProductSection = styled.section`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const ProductContainer = styled.div`
  display: inline-block;
  width: 90%;
  max-width: 700px;
  @media (max-width: 720px) {
    max-width: 400px;
  }
`;
const ProductItem = styled.div`
  display: inline-block;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.skyBlue};
  }
`;
const ProductImgContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.black};
  margin-left: 1rem;
  margin-right: 1rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
`;
const ProductImg = styled.img`
  width: 130px;
  @media (max-width: 320px) {
    width: 100px;
  }
`;
const ProductTitleContainer = styled.div``;
const ProductTitle = styled.div``;
const ProductPageSection = styled.section``;
const ProductPageContainer = styled.div`
  text-align: center;
`;
const ProductPageItem = styled.div`
  font-size: 17px;
  display: inline-block;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.skyBlue};
  }
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  line-height: 1rem;
`;

const ProductPageArrow = styled(ProductPageItem)`
  transform: translateY(10%);
`;

export default ({}) => (
  <>
    <Head>
      <title>이지라이프 - 이지라이프는 세상을 편리하게 만듭니다</title>
    </Head>
    <CategorySection>
      <CategroyContainer>
        <CategoryItemContainer>
          <CategoryItem>자세유지제품</CategoryItem>
          <CategoryItem>보행, 이동보조제품</CategoryItem>
          <CategoryItem>페달로</CategoryItem>
          <CategoryItem>재활훈련제품</CategoryItem>
          <CategoryItem>욕실, 배변 보조 제품</CategoryItem>
          <CategoryItem>보조공학제품</CategoryItem>
        </CategoryItemContainer>
      </CategroyContainer>
    </CategorySection>
    <SubCategorySection>
      <SubCategoryContainer>
        <SubCategoryItem>좌석</SubCategoryItem>
        <SubCategoryItem>기립보조기구</SubCategoryItem>
        <SubCategoryItem>카시트</SubCategoryItem>
        <SubCategoryItem>휠 베이스 보조기구</SubCategoryItem>
      </SubCategoryContainer>
    </SubCategorySection>
    <ProductSection>
      <ProductContainer>
        <ProductItem>
          <ProductImgContainer>
            <ProductImg src={"/static/img/brand/logo-icon.png"} />
          </ProductImgContainer>
          <ProductTitleContainer>
            <ProductTitle>아이용, 스페셜 시트</ProductTitle>
          </ProductTitleContainer>
        </ProductItem>
        <ProductItem>
          <ProductImgContainer>
            <ProductImg src={"/static/img/brand/logo-icon.png"} />
          </ProductImgContainer>
          <ProductTitleContainer>
            <ProductTitle>아이용, 스페셜 시트</ProductTitle>
          </ProductTitleContainer>
        </ProductItem>
        <ProductItem>
          <ProductImgContainer>
            <ProductImg src={"/static/img/brand/logo-icon.png"} />
          </ProductImgContainer>
          <ProductTitleContainer>
            <ProductTitle>아이용, 스페셜 시트</ProductTitle>
          </ProductTitleContainer>
        </ProductItem>
        <ProductItem>
          <ProductImgContainer>
            <ProductImg src={"/static/img/brand/logo-icon.png"} />
          </ProductImgContainer>
          <ProductTitleContainer>
            <ProductTitle>아이용, 스페셜 시트</ProductTitle>
          </ProductTitleContainer>
        </ProductItem>
        <ProductItem>
          <ProductImgContainer>
            <ProductImg src={"/static/img/brand/logo-icon.png"} />
          </ProductImgContainer>
          <ProductTitleContainer>
            <ProductTitle>아이용, 스페셜 시트</ProductTitle>
          </ProductTitleContainer>
        </ProductItem>
        <ProductItem>
          <ProductImgContainer>
            <ProductImg src={"/static/img/brand/logo-icon.png"} />
          </ProductImgContainer>
          <ProductTitleContainer>
            <ProductTitle>아이용, 스페셜 시트</ProductTitle>
          </ProductTitleContainer>
        </ProductItem>
        <ProductItem>
          <ProductImgContainer>
            <ProductImg src={"/static/img/brand/logo-icon.png"} />
          </ProductImgContainer>
          <ProductTitleContainer>
            <ProductTitle>아이용, 스페셜 시트</ProductTitle>
          </ProductTitleContainer>
        </ProductItem>
        <ProductItem>
          <ProductImgContainer>
            <ProductImg src={"/static/img/brand/logo-icon.png"} />
          </ProductImgContainer>
          <ProductTitleContainer>
            <ProductTitle>아이용, 스페셜 시트</ProductTitle>
          </ProductTitleContainer>
        </ProductItem>
      </ProductContainer>
    </ProductSection>
    <ProductPageSection>
      <ProductPageContainer>
        <ProductPageArrow>
          <IoIosArrowDropleftCircle />
        </ProductPageArrow>
        <ProductPageItem>1</ProductPageItem>
        <ProductPageItem>2</ProductPageItem>
        <ProductPageItem>3</ProductPageItem>
        <ProductPageItem>4</ProductPageItem>
        <ProductPageItem>5</ProductPageItem>
        <ProductPageArrow>
          <IoIosArrowDroprightCircle />
        </ProductPageArrow>
      </ProductPageContainer>
    </ProductPageSection>
  </>
);
