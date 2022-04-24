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

const Cancle = () => {
  return (
    <Wrapper>
      <div className="container">
        <img
          src="https://ouch-cdn2.icons8.com/MY3__N9Vle_5mIOAQ7CChXeUmALiXu7SGqICKLSnGO8/rs:fit:256:192/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzgw/L2JhNmYzYzJlLTJl/YTEtNGJiYS04N2Q5/LTEzNDBkMTdmYjcy/Yi5zdmc.png"
          alt=""
        />
        <h1>Your Order has been Canceled</h1>
        <Link to="/" className="link">
          Back To Home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Cancle;
