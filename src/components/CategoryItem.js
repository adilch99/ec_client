import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px 6px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageInfo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 30px;
  color: white;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <ImageInfo>
        <Title>{item.title}</Title>
        <Link to={`/products/${item.cat}`}>
          <Button>SHOP NOW</Button>
        </Link>
      </ImageInfo>
    </Container>
  );
};

export default CategoryItem;
