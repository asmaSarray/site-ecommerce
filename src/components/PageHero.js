import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="sectionhero">
        <h3 className="linkhero">
          <Link to="/" className="linkhero">
            Home
          </Link>
          {product && <Link to="/products">/ Products</Link>}/{title}
        </h3>
      </div>
      ;
    </Wrapper>
  );
};
<div className="buttonhero">
  <Link to="/about">Go to Some Route</Link>
</div>;
const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;
export default PageHero;
