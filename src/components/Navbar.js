import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetUser } from "../redux/userRedux";

// style components UI

const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  padding: 20px 0px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 20px;
  ${mobile({ display: "none" })}
  @media only screen and (max-width: 666px) {
    display: none;
  }
`;

const Language = styled.span``;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  margin-left: 10px;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ textAlign: "start", paddingLeft: "20px" })}
  @media only screen and (max-width: 666px) {
    text-align: start;
    padding-left: 20px;
  }
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: bold;
  @media only screen and (max-width: 550px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  padding-right: 20px;

  .nav-links {
    color: black;
    text-decoration: none;
  }
  @media only screen and (max-width: 550px) {
    width: 100%;
  }
`;

const AuthMenu = styled.span`
  margin-right: 15px;
  font-weight: 400;
  @media only screen and (max-width: 550px) {
    width: 100%;
  }
`;

// navbar

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  const { error, errorMsg, user, isFetching } = useSelector(
    (state) => state.user
  );
  const logout = () => {
    localStorage.removeItem("user");
    dispatch(resetUser());
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <Search fontSize="small" style={{ color: "gray" }} />
            </SearchContainer>
          </Left>
          <Center>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Title>aLL iN one.</Title>
            </Link>
          </Center>
          <Right>
            {user ? (
              <>
                <AuthMenu>{"Hello " + user.name}</AuthMenu>
                <AuthMenu>{"GiftPoints: " + user.giftPoints}</AuthMenu>
                <AuthMenu
                  className="nav-links"
                  style={{ cursor: "pointer" }}
                  onClick={logout}
                >
                  Logout
                </AuthMenu>
              </>
            ) : (
              <>
                <Link to="/register" className="nav-links">
                  <AuthMenu>Register</AuthMenu>
                </Link>
                <Link to="/login" className="nav-links">
                  <AuthMenu className="nav-links">Sign In</AuthMenu>
                </Link>
              </>
            )}
            <Link to="/cart" className="nav-links">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
