import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  .container {
    width: 100vw;
    height: 100vh;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
  }
  h1 {
    margin-bottom: 2rem;
  }
  img {
    margin-bottom: 1rem;
    width: 300px;
  }
`;

const Success = () => {
  return (
    <Wrapper>
      <div className="container">
        <img
          src="https://i.pinimg.com/originals/5f/f3/b8/5ff3b8a22b8b7767cf23a1feb7bdc575.png"
          alt=""
        />
        <h1>Your Order has been Placed</h1>
        <Link to="/" className="link">
          Back To Home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Success;
