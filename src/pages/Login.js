import React, { useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing_197531-11045.jpg?w=2000")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 25px;
  min-width: 30%;
  ${mobile({ width: "80%" })}
  background-color: white;
`;

const Title = styled.h1`
  font-weight: 400;
  margin-bottom: 20px;
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  letter-spacing: 1px;
  font-size: 16px;
  margin: 0px 10px 15px 0px;
  outline: none;
`;

const Aggrement = styled.p`
  margin: 5px 10px 15px 0px;
  text-align: justify;
`;

const Button = styled.button`
  height: 50px;
  width: 120px;
  color: white;
  background: teal;
  border: none;
  letter-spacing: 1px;
  margin-bottom: 10px;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
  }
`;

const Error = styled.p`
  color: red;
  margin-bottom: 10px;
  text-align: center;
  letter-spacing: 1px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, errorMsg, user, isFetching } = useSelector(
    (state) => state.user
  );

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        {error && <Error>{errorMsg}</Error>}
        <Form>
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        <Button onClick={handleLogin} disabled={isFetching}>
          Login
        </Button>
        <Aggrement>Don't You Remember the Password?</Aggrement>
        <Link to="/register">
          <Aggrement>CREATE AN ACCOUNT</Aggrement>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
