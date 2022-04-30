import React from "react";
import styled from "styled-components";
import mainImage from "../assets/images/slider.webp";

const Container = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Slider = () => {
  return (
    <Container>
      <Image src={mainImage} />
    </Container>
  );
};

export default Slider;
