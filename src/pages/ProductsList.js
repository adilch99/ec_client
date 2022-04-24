import React, { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { useLocation } from "react-router-dom";

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 666px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Select = styled.select`
  margin: 10px;
  @media only screen and (max-width: 666px) {
    margin-left: 0;
  }
  padding: 10px;
  outline: none;
`;

const Option = styled.option`
  padding: 5px auto;
`;

const FilterText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const ProductsList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState();

  const filtersHandler = (e) => {
    let value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <Announcement />
      <Title>{cat.charAt(0).toUpperCase() + cat.slice(1)}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="color" onChange={filtersHandler}>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={filtersHandler}>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={sortHandler}>
            <Option value="newest" selected>
              Newest
            </Option>
            <Option value="acc">Price (acc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductsList;
