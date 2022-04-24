import React from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const ImageInfo = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.2);
  opacity: 0;
  z-index: 3;
`;

const Container = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 350px;
  height: 350px;
  margin: 5px;
  position: relative;

  &:hover ${ImageInfo} {
    opacity: 1;
    transition: 0.5s all ease;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
`;

const Icon = styled.div`
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 3px;

  &:hover {
    transform: scale(1.2);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <ImageInfo>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <ShoppingCartOutlined />
          </Link>
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <Search />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </ImageInfo>
    </Container>
  );
};

export default Product;
