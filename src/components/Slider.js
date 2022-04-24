import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { mobile } from "../responsive";

const items = [
  {
    id: 1,
    img: "https://www.downloadclipart.net/large/kendall-jenner-png-image.png",
    title: "Summer Collection",
    desc: "Hurry! its 50% off. Go and Check out all Winter Colletion",
    color: "coral",
  },
  {
    id: 2,
    img: "https://purepng.com/public/uploads/large/purepng.com-fashion-girlwomenpeoplepersonsfemalefashion-1121525113527bq92n.png",
    title: "New Arrival",
    desc: "Hurry! its 50% off. Go and Check out all Winter Colletion",
    color: "teal",
  },
  {
    id: 3,
    img: "https://purepng.com/public/uploads/large/purepng.com-fashion-girlwomenpeoplepersonsfemalefashion-11215251135953rklf.png",
    title: "Spring Collection",
    desc: "Hurry! its 50% off. Go and Check out all Winter Colletion",
    color: "orange",
  },
];

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow-x: hidden;
  ${mobile({ display: "none" })}
  &::-webkit-scrollbar {
    scrollbar-width: 0px;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  border-radius: 50%;
  opacity: 0.75s;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "15px"};
  right: ${(props) => props.direction === "right" && "15px"};
  cursor: pointer;
  z-index: 3;
`;

const Slide = styled.div`
  height: 100vh;
  display: flex;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
  overflow: hidden;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: ${(props) => props.color};
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const sliderIndexChanger = (direction) => {
    if (direction === "right") {
      setSlideIndex(slideIndex < items.length - 1 ? slideIndex + 1 : 0);
    } else {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : items.length - 1);
    }
  };

  return (
    <>
      <Container>
        <Arrow direction="left" onClick={() => sliderIndexChanger("left")}>
          <ArrowLeft />
        </Arrow>
        <Slide sliderIndex={slideIndex}>
          {items.map((item) => (
            <Wrapper key={item.id} color={item.color}>
              <Image src={item.img} />
            </Wrapper>
          ))}
        </Slide>
        {/* <Arrow direction="right" onClick={() => sliderIndexChanger("right")}>
          <ArrowRight />
        </Arrow> */}
      </Container>
    </>
  );
};

export default Slider;
