import Link from "next/link";
import styled from "styled-components";

const CategoryItem = styled.a`
  display: inline-block;
  background-color: ${props =>
    props.selected ? props.theme.lightBlack : props.theme.whiteGray};
  color: ${props => (props.selected ? "white" : "inherit")};
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

export default ({ id, name, selected }) => (
  <Link href={`/products?selCategoryId=${id}`}>
    <CategoryItem selected={selected}>{name}</CategoryItem>
  </Link>
);
