import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CategoryButton from "../../components/CategoryButton";

const CategorySection = styled.section`
  padding-top: 7rem;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;
const CategroyContainer = styled.div`
  background-image: url("/static/img/etc/computer-1149148_1920.jpg");
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
  font-size: 1.1rem;
  font-weight: bolder;
  @media (max-width: 420px) {
    padding-top: inherit;
    padding-bottom: inherit;
  }
`;

const SubCategorySection = styled.section`
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
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
  @media (min-width: 1280px) {
    width: 100%;
  }
`;
const SubCategoryItem = styled.a`
  display: inline-block;
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
  color: ${props => (props.selected ? props.theme.skyBlue : "inherit")};
  &:hover {
    color: ${props => props.theme.skyBlue};
  }
`;

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

export default ({ product, subCategories, categories, onCategoryClick }) => (
  <>
    <Head>
      <title>이지라이프 - 이지라이프는 세상을 편리하게 만듭니다</title>
    </Head>
    <Header />
    <CategorySection>
      <CategroyContainer>
        <CategoryItemContainer>
          {categories &&
            categories.map((category, index) => (
              <CategoryButton
                key={category.id}
                id={category.id}
                name={category.name}
                onClickFn={() => onCategoryClick(category.id)}
                selected={product.subCategory.category.id === category.id}
              />
            ))}
        </CategoryItemContainer>
      </CategroyContainer>
    </CategorySection>

    <SubCategorySection>
      <SubCategoryContainer>
        {subCategories &&
          subCategories.map(subcategory => (
            <Link
              href={`/products?selSubCategoryId=${subcategory.id}&selCategoryId=${subcategory.category.id}`}
            >
              <SubCategoryItem
                key={subcategory.id}
                // onClick={() => onSubCategoryClick(subcategory.id)}
                selected={product.subCategory.id === subcategory.id}
              >
                {subcategory.name}
              </SubCategoryItem>
            </Link>
          ))}
      </SubCategoryContainer>
    </SubCategorySection>

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
            {product &&
              product.infoImg &&
              product.infoImg.map(img => (
                <ProductInfoImg src={img.url} key={img.id} />
              ))}
          </ProductInfoImgContainer>
          <ProductInfoContentContainer>
            <ProductInfoContent>
              {product &&
                product.infomation &&
                product.infomation.split("\n").map(line => {
                  return (
                    <span>
                      {line}
                      <br />
                    </span>
                  );
                })}
            </ProductInfoContent>
          </ProductInfoContentContainer>
        </ProductInfoSection>
      </>
    )}

    <Footer />
  </>
);
