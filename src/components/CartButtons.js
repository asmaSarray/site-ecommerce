import React from "react";
import { FaShoppingCart, FaUserPlus, FaUserMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import styled from "styled-components";

// import "../components/cartbutton.css";
const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_item } = useCartContext();
  return (
    <Wrapper>
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value"> {total_item} </span>
        </span>
      </Link>
      <Link to="/login" type="button" className="cart-btn">
        Login
        <span className="cart-container">
          <FaUserPlus />
        </span>
      </Link>
      <button type="button" className="auth-btn">
        Logout <FaUserMinus />
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  width: 350px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    text-decoration: none;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 3px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -30px;
    background: black;
    width: 4px;
    height: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1rem;
    color: white;
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
