import React from "react";
import styled from "styled-components";
import { Send } from "@mui/icons-material";
import { tablet, mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 500px;
  ${mobile({ height: "400px" })}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const Desc = styled.span`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 30px;
  text-align: center;
  padding: auto 5px;
`;

const InputContainer = styled.div`
  height: 50px;
  width: 500px;
  border: 0.5px solid grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${tablet({ width: "85vw" })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;
  padding: 2px 5px;
  letter-spacing: 1px;
`;

const Button = styled.button`
  width: 100px;
  height: 100%;
  text-align: center;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products</Desc>
      <InputContainer>
        <Input placeholder="Your email..." />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
