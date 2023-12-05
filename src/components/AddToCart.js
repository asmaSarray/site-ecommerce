import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmoutButtons from "./AmoutButtons";
import { useState } from "react";
// import "../components/add.css";
import styled from "styled-components";

const AddToCart = ({ product }) => {
  const { addtocart } = useCartContext();
  const { id, stock, colors } = product;
  const [mainColor, SetMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
        console.log("tempAmount increase:", tempAmount);
      }
      return tempAmount;
    });
  };

  const descrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
        console.log("tempAmount descease :", tempAmount);
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className="colors">
        <span> colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color ? "color-btn active" : "color-btn"
                }`}
                onClick={() => SetMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container ">
        <AmoutButtons
          amount={amount}
          increase={increase}
          descrease={descrease}
        />
        <div>
          <Link
            to="/cart"
            className="btn"
            onClick={() => addtocart(id, mainColor, amount, product)}
          >
            ADD TO CART
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: white;
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    color: white;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    font-size: 1rem;
    max-width: 100px;
    max-height: 100px;
    background-color: rgb(179, 153, 170);
  }
`;
export default AddToCart;
