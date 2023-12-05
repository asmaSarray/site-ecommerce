import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../components/navbar.css";
// import logo from "../assets/logo.svg";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
// import { useUserContext } from "../context/user_context";
const Nav = () => {
  const { openSidebar } = useProductsContext();
  return (
    <div className="center">
      <div className="header">
        <Link to="/">{/* <img src={logo} alt='comfy sloth'/> */}</Link>
        <button type="button" onClick={openSidebar} className="toggle">
          <FaBars />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        ))}
      </ul>
      <div className="cart">
        <CartButtons />
      </div>
    </div>
  );
};

export default Nav;
