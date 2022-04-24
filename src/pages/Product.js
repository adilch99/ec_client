import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import LoadingAnimation from "../components/animations/loading/LoadingAnimation";
import { publicRequest } from "../requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import { loginSuccess } from "../redux/userRedux";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
  height: 90vh;
  @media only screen and (max-width: 950px) {
    flex-direction: column;
    height: auto;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
  padding: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 950px) {
    flex-direction: column;
    height: auto;
    width: 90vw;
  }
`;

const Image = styled.img`
  max-height: 100%;
  width: 100%;
`;

const ImgInfo = styled.div`
  flex: 1;
  padding: 20px;
  height: 100%;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  text-align: justify;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 40px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const FilterContainer = styled.div`
  width: 300px;
`;

const FitlerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FitlerTopA = styled.div`
  display: flex;
  align-items: center;
`;

const FitlerTopB = styled.div`
  display: flex;
  align-items: center;
`;

const FilterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const FText = styled.p`
  font-weight: 300;
  font-size: 25px;
  margin-right: 10px;
`;

const FColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: auto 2px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const Select = styled.select`
  padding: 10px;
`;

const Option = styled.option``;

const ProductNumContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const ProductNum = styled.p`
  padding: 5px 10px;
  border: 0.5px solid grey;
  margin: auto 5px;
  border-radius: 5px;
`;

const Button = styled.button`
  font-weight: 300px;
  padding: 5px;
  height: 50px;
  width: 120px;
  border: 1px solid grey;
  cursor: pointer;
`;

const LoadingContainer = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Review = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: auto;
  .add-review {
    text-align: center;
    font-size: 26px;
  }
  h6 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  textarea {
    font-size: 15px;
    padding: 5px;
    width: 400px;
    height: 200px;
    margin-bottom: 1rem;
  }

  button {
    font-weight: 300px;
    padding: 5px;
    height: 50px;
    width: 120px;
    border: 1px solid grey;
    cursor: pointer;
    display: block;
    margin-bottom: 1rem;
  }

  .all-sub {
    margin: 10px auto;
    padding: 10px;
    border: 1px solid grey;
    h4 {
      margin-bottom: 8px;
    }
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [allReviews, setAllReviews] = useState([]);

  const { error, errorMsg, user, isFetching } = useSelector(
    (state) => state.user
  );

  const getReviews = async () => {
    try {
      const productReviews = await publicRequest.get(`/reviews/${id}`);
      setAllReviews(productReviews.data.reviews);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
    getReviews();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "decr") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  const handleReview = async () => {
    try {
      setLoading(true);
      await publicRequest.post("/reviews", {
        review: review,
        userId: user._id,
        productId: id,
        userName: user.name,
      });
      const newUser = await publicRequest.get(`/users/find/${user._id}`);
      dispatch(loginSuccess({ user: newUser.data }));
      setLoading(false);
      setReview("");
      getReviews();
    } catch (err) {
      console.log(err.response);
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <Announcement />
      {product ? (
        <Wrapper>
          <ImgContainer>
            <Image src={product.img} />
          </ImgContainer>
          <ImgInfo>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>$ {product.price}</Price>
            <FilterContainer>
              <FitlerTop>
                <FitlerTopA>
                  <FText>Color</FText>
                  {product.color.map((color, index) => (
                    <FColor
                      key={index}
                      color={color.toLowerCase()}
                      onClick={() => setColor(color)}
                    ></FColor>
                  ))}
                </FitlerTopA>
                <FitlerTopB>
                  <FText>Size</FText>
                  <Select
                    onClick={(e) => setSize(e.target.value)}
                    defaultValue="DEFAULT"
                  >
                    <Option value={"DEFAULT"} disabled>
                      size
                    </Option>
                    {product.size.map((size, index) => (
                      <Option key={index}>{size}</Option>
                    ))}
                  </Select>
                </FitlerTopB>
              </FitlerTop>
              <FilterBottom>
                <ProductNumContainer>
                  <Remove
                    onClick={() => handleQuantity("decr")}
                    style={{ cursor: "pointer" }}
                  />
                  <ProductNum>{quantity}</ProductNum>
                  <Add
                    onClick={() => handleQuantity("incr")}
                    style={{ cursor: "pointer" }}
                  />
                </ProductNumContainer>
                <Button onClick={handleClick}>ADD TO CART</Button>
              </FilterBottom>
            </FilterContainer>
          </ImgInfo>
        </Wrapper>
      ) : (
        <LoadingContainer>
          <LoadingAnimation />
        </LoadingContainer>
      )}
      <Review>
        {user ? (
          <div className="input-review">
            <h6>Give Review</h6>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
            <button onClick={handleReview} disabled={loading}>
              Submit
            </button>
          </div>
        ) : (
          <p className="add-review">Login To Submit Review</p>
        )}
        <h1>Reviews</h1>

        <div className="all-reviews">
          {allReviews ? (
            allReviews.map((item, index) => (
              <div className="all-sub" key={index}>
                <h4>{item.userName}</h4>
                <p>{item.review}</p>
              </div>
            ))
          ) : (
            <p>No Reviews Yet</p>
          )}
        </div>
      </Review>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
