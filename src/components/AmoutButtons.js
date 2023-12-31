import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import styled from "styled-components";
import AddToCart from "./AddToCart";
const AmoutButtons = ({ increase, descrease, amount }) => {
  return (
    <Wrapper className="amount-btn">
      <button type="button" className="amount-btn" onClick={descrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
  }
  h2 {
    margin-bottom: 0;
  }
`;
export default AmoutButtons;
