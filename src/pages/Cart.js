import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  width: 100vw;
  padding: 25px;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Top = styled.div`
  display: Flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const TopButtonA = styled.button`
  padding: 15px;
  background-color: white;
`;

const TopButtonB = styled.button`
  padding: 15px;
  color: white;
  background-color: black;
  border: none;
`;

const TopTexts = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 550px) {
    display: none;
  }
`;

const TopText = styled.p`
  margin-left: 20px;
  text-decoration: underline;
`;

const Bottom = styled.div`
  margin-top: 40px;
  display: flex;
  @media only screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

const BLeft = styled.div`
  flex: 2.5;
  margin: auto 5px;
`;

const MainProduct = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  height: 250px;
  border-bottom: 1px solid grey;
  @media only screen and (max-width: 550px) {
    flex-direction: column;
    height: auto;
  }
`;

const ProductDetails = styled.div`
  display: flex;
`;

const Image = styled.img`
  height: 100%;
  @media only screen and (max-width: 550px) {
    width: 200px;
  }

  ${mobile({ width: "150px" })}
`;

const ProductDetail = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductName = styled.p`
  margin-bottom: 20px;
`;

const ProductID = styled.p`
  margin-bottom: 20px;
`;

const ProductColor = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const ColorSpan = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 10px;
`;

const ProductSize = styled.p``;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ProductPriceOuter = styled.div``;

const ProductPriceInner = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const ProductAmount = styled.p`
  font-size: 30px;
  margin: auto 8px;
`;

const RealPrice = styled.p`
  font-size: 30px;
  font-weight: 350;
`;

const BRight = styled.div`
  flex: 1;
  padding: 20px 30px;
  border: 1px solid grey;
  border-radius: 5px;
  height: fit-content;
`;

const Summary = styled.h1`
  margin-bottom: 25px;
  font-weight: 350;
`;

const OSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SummaryInfo = styled.p``;

const FinalButton = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  color: white;
  letter-spacing: 1px;
  background-color: black;
  cursor: pointer;
  margin-bottom: 1rem;
  :disabled {
    cursor: not-allowed;
  }
`;

const Cart = () => {
  const user = useSelector((state) => state.user.user);

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const [discount, setDiscount] = useState(0);
  const [wantDiscount, setWantDiscount] = useState(false);
  const [loading, setLoading] = useState(false);
  const checkoutHandler = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:5000/api/payments/create-checkout-session`,
        {
          items: cart.products,
          discount,
        }
      );
      setLoading(false);
      window.location.href = res.data.url;
    } catch (error) {
      navigate("/payment/cancel");
    }
  };

  const pointsHandler = () => {
    setWantDiscount(!wantDiscount);
  };

  useEffect(() => {
    if (wantDiscount && cart.total < user.giftPoints) {
      setDiscount(cart.total);
    } else if (wantDiscount) {
      setDiscount(user.giftPoints);
    } else {
      setDiscount(0);
    }
  }, [wantDiscount]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButtonA>CONTINUE SHOPPING</TopButtonA>
          <TopTexts>
            <TopText>Shoping Bag ({cart.quantity})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButtonB>CHECKOUT NOW</TopButtonB>
        </Top>
        <Bottom>
          <BLeft>
            {cart.products.length !== 0 ? (
              cart.products.map((product, index) => (
                <MainProduct key={index}>
                  <ProductDetails>
                    <Image src={product.img} />
                    <ProductDetail>
                      <ProductName>
                        <b>Product</b>: {product.title}
                      </ProductName>
                      <ProductID>
                        <b>ID</b>: {product._id}
                      </ProductID>
                      <ProductColor>
                        <b>Color</b>:{" "}
                        <ColorSpan color={product.color}></ColorSpan>
                      </ProductColor>
                      <ProductSize>
                        <b>Size</b>: {product.size}
                      </ProductSize>
                    </ProductDetail>
                  </ProductDetails>
                  <ProductPrice>
                    <ProductPriceOuter>
                      <ProductPriceInner>
                        <Add />
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <Remove />
                      </ProductPriceInner>
                      <RealPrice>
                        $ {product.price * product.quantity}
                      </RealPrice>
                    </ProductPriceOuter>
                  </ProductPrice>
                </MainProduct>
              ))
            ) : (
              <MainProduct>No Item</MainProduct>
            )}
          </BLeft>
          <BRight>
            <Summary>Order Summary</Summary>
            <OSummary>
              <SummaryInfo>Subtotal</SummaryInfo>
              <SummaryInfo>$ {cart.total}</SummaryInfo>
            </OSummary>
            <OSummary>
              <SummaryInfo>Estimate Shipping</SummaryInfo>
              <SummaryInfo>$ 5</SummaryInfo>
            </OSummary>
            <OSummary>
              <SummaryInfo>Shipping Discount</SummaryInfo>
              <SummaryInfo>$ 5</SummaryInfo>
            </OSummary>
            <OSummary>
              <SummaryInfo>
                <b>Total</b>
              </SummaryInfo>
              <SummaryInfo>
                <b>$ {cart.total - discount}</b>
                <b>{wantDiscount && `,  saved ${discount}`}</b>
              </SummaryInfo>
            </OSummary>
            <FinalButton
              onClick={checkoutHandler}
              disabled={cart.length < 0 || loading}
            >
              CHECKOUT NOW
            </FinalButton>
            <FinalButton onClick={pointsHandler} disabled={cart.length > 0}>
              {wantDiscount ? "Dont Buy With Points" : "Buy With GiftPoints"}
            </FinalButton>
          </BRight>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Cart;
