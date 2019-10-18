import Head from "next/head";
import styled from "styled-components";
import CategoryButton2 from "../../components/CategoryButton2";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

const CategorySection = styled.section`
  padding-top: 7rem;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
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

export default ({
  categories,
  selCategoryId,
  subCategories,
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
              <CategoryButton2
                key={category.id}
                id={category.id}
                name={category.name}
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
            <Link
              href={`/products?selSubCategoryId=${subcategory.id}&selCategoryId=${subcategory.category.id}`}
              key={subcategory.id}
            >
              <SubCategoryItem
                key={subcategory.id}
                selected={selSubCategoryId === subcategory.id}
              >
                {subcategory.name}
              </SubCategoryItem>
            </Link>
          ))}
      </SubCategoryContainer>
    </SubCategorySection>
    <ProductSection>
      <ProductContainer>
        {products &&
          products.length > 0 &&
          products.map(
            product =>
              product && (
                <Link href={`/product?id=${product.id}`} key={product.id}>
                  <a>
                    <ProductItem>
                      <ProductImgContainer>
                        {product.snapshot && (
                          <ProductImg src={product.snapshot.url} />
                        )}
                      </ProductImgContainer>
                      <ProductTitleContainer>
                        <ProductTitle>{product.name}</ProductTitle>
                      </ProductTitleContainer>
                    </ProductItem>
                  </a>
                </Link>
              )
          )}
      </ProductContainer>
    </ProductSection>

    <Footer />
  </>
);
