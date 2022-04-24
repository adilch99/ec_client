import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { tablet } from "../responsive";
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
  width: 40%;
  ${tablet({ width: "80%" })}
  background-color: white;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-weight: 400;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 10px;
  letter-spacing: 1px;
  font-size: 16px;
  margin: 0px 10px 15px 0px;
  outline: none;
  width: 100%;
`;

const Aggrement = styled.p`
  margin: 5px 10px 15px 0px;
  text-align: justify;
`;

const Button = styled.button`
  height: 50px;
  width: 100%;
  color: white;
  background: teal;
  border: none;
  letter-spacing: 1px;
  cursor: pointer;

  :active {
    transform: scale(1.1);
    opacity: 0.7;
  }
`;

const Error = styled.p`
  color: red;
  margin-bottom: 10px;
  text-align: center;
  letter-spacing: 1px;
`;

const Register = () => {
  const { error, errorMsg, user, isFetching } = useSelector(
    (state) => state.user
  );
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    register(dispatch, data);
    setData({
      name: "",
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        {error && <Error>{errorMsg}</Error>}
        <Form>
          <Input
            placeholder="Name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />

          <Input
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </Form>
        <Aggrement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Aggrement>
        <Button onClick={handleSubmit} disabled={isFetching}>
          CREATE
        </Button>
        <Link to="/login">
          <Aggrement>Already have an account.</Aggrement>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Register;
