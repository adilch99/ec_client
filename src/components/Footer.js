import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  LocationOn,
  Call,
  MailOutline,
} from "@mui/icons-material";
import { mobile } from "../responsive";

const PContainer = styled.div`
  background-color: teal;
`;

const Container = styled.div`
  width: 90vw;
  display: flex;
  margin: auto;
  padding-top: 20px;
  color: white;
  flex-wrap: wrap;
`;

const Right = styled.div`
  flex: 1;
  padding: 10px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  letter-spacing: 1px;
`;

const Desc = styled.p`
  margin-bottom: 20px;
  width: 300px;
  text-align: justify;
  letter-spacing: 1px;
  font-weight: 200;
`;

const SocialIcons = styled.div`
  padding: 5px;
`;

const Center = styled.div`
  flex: 1;
  padding: 10px 10px 10px 20px;
  ${mobile({ display: "none" })}
`;

const CenterTitle = styled.h3`
  margin-bottom: 20px;
  letter-spacing: 1px;
`;

const LinkDiv = styled.div`
  display: flex;
  width: 300px;
`;

const CenterRight = styled.div``;

const CenterLeft = styled.div`
  margin-right: 30px;
`;

const Link = styled.p`
  margin-bottom: 10px;
`;

const Left = styled.div`
  flex: 1;
  padding: 10px;
`;

const LeftTitle = styled.h3`
  margin-bottom: 30px;
`;

const LBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const LText = styled.p`
  margin-left: 10px;
  letter-spacing: 1px;
  font-weight: 200;
`;

const Footer = () => {
  return (
    <PContainer>
      <Container>
        <Right>
          <Title>Orange</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            corporis officiis neque provident aut error ipsa perferendis dolores
            rem culpa iure dolorem non natus voluptates dignissimos eligendi, et
            quo eaque incidunt dolor, magnam ullam illum vitae? Ut consequuntur
            sed quos?
          </Desc>
          <SocialIcons>
            <Facebook fontSize="large" style={{ marginRight: "10px" }} />
            <Instagram fontSize="large" style={{ marginRight: "10px" }} />
            <Twitter fontSize="large" style={{ marginRight: "10px" }} />
            <Pinterest fontSize="large" style={{ marginRight: "10px" }} />
          </SocialIcons>
        </Right>
        <Center>
          <CenterTitle>Useful Links</CenterTitle>
          <LinkDiv>
            <CenterLeft>
              <Link>Home</Link>
              <Link>Man Fashion</Link>
              <Link>Accessories</Link>
              <Link>Order Tracking</Link>
              <Link>Wishlist</Link>
            </CenterLeft>
            <CenterRight>
              <Link>Cart</Link>
              <Link>Woman Fashion</Link>
              <Link>My Account</Link>
              <Link>Wishlist</Link>
              <Link>Terms</Link>
            </CenterRight>
          </LinkDiv>
        </Center>
        <Left>
          <LeftTitle>Contact</LeftTitle>
          <LBox>
            <LocationOn />
            <LText>123 Blah, BLah, BlahBlahBlha</LText>
          </LBox>
          <LBox>
            <Call />
            <LText>+1 123 123 12</LText>
          </LBox>
          <LBox>
            <MailOutline />
            <LText>contact@orange.dev</LText>
          </LBox>
        </Left>
      </Container>
    </PContainer>
  );
};

export default Footer;
