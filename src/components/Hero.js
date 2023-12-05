import React from "react";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1 className="herotitle">
          design your <br />
          comfort zone
        </h1>
        <p>
          Le client lui-même, le client pourra poursuivre l'adipiscing de
          l'entreprise. Juste, mais on peut avoir toutes les douleurs du corps !
          A moins qu'il déteste être rejeté, on ouvre avec haine, aveuglé par le
          libre et parce que les temps qui accepteront qui d'autre ?
        </p>
        <Link to="/ProductsPage" className="hero-btn">
          chop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working " className="main-img" />
      </article>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  .hero-btn {
    color: white;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    font-size: 1rem;
    max-width: 100px;
    max-height: 100px;
    background-color: rgb(179, 153, 170);
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      color: white;
      padding: 0.75rem 1.5rem;
      text-decoration: none;
      font-size: 1rem;
      max-width: 100px;
      max-height: 100px;
      background-color: rgb(179, 153, 170);
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 300px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
