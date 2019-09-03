import Head from "next/head";
import styled from "styled-components";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle
} from "react-icons/io";
import CategoryButton from "../../components/CategoryButton";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

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
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
  color: ${props => (props.selected ? props.theme.skyBlue : "inherit")};
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

export default ({
  categories,
  setCategory,
  selCategoryId,
  subCategories,
  setSubCategory,
  selSubCategoryId,
  products
}) => (
  <>
    <Header />
    <Head>
      <title>이지라이프 - 이지라이프는 세상을 편리하게 만듭니다</title>
    </Head>
    <CategorySection>
      <CategroyContainer>
        <CategoryItemContainer>
          {categories &&
            categories.map((category, index) => (
              <CategoryButton
                key={category.id}
                id={category.id}
                name={category.name}
                onClickFn={() => setCategory(category.id)}
                selected={
                  selCategoryId ? category.id === selCategoryId : index === 0
                }
              />
            ))}
        </CategoryItemContainer>
      </CategroyContainer>
    </CategorySection>
    <SubCategorySection>
      <SubCategoryContainer>
        {subCategories &&
          subCategories.map(subcategory => (
            <SubCategoryItem
              key={subcategory.id}
              onClick={() => setSubCategory(subcategory.id)}
              selected={selSubCategoryId === subcategory.id}
            >
              {subcategory.name}
            </SubCategoryItem>
          ))}
      </SubCategoryContainer>
    </SubCategorySection>
    <ProductSection>
      <ProductContainer>
        {products &&
          products.length > 0 &&
          products.map(product => (
            <Link href={`/product?id=${product.id}`} key={product.id}>
              <a>
                <ProductItem>
                  <ProductImgContainer>
                    <ProductImg src={product.snapshot.url} />
                  </ProductImgContainer>
                  <ProductTitleContainer>
                    <ProductTitle>{product.name}</ProductTitle>
                  </ProductTitleContainer>
                </ProductItem>
              </a>
            </Link>
          ))}
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
    <Footer />
  </>
);
