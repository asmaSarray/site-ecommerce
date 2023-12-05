import React from "react";
// import styled from "../pages/error.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ErrorPage = () => {
  return (
    <Wrapper className="page">
      <section>
        <h1>404</h1>
        <br />
        <h3>sorry, the page you tried cannot be foud</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: rgb(179, 153, 170);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
