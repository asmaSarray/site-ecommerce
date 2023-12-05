import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
        <input type="text" className="styledInput" placeholder="email" />
        <input type="password" className="styledInput" placeholder="password" />
      </InputContainer>

      <ButtonContainer>
        <button className="styledButton">Sign In</button>
      </ButtonContainer>

      <OrSignUp>
        <Link to="/registre" type="button" className="h4">
          Sign Up
        </Link>
      </OrSignUp>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  width: 100%;
  background: white;
  //   box-shadow: 0 8px 32px 0 rgb(179, 153, 170);
  color: black;
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  text-transform: uppercase; /* Correction: "uppercase" au lieu de "upoercase" */
  letter-spacing: 0.4rem; /* Correction: 0.4rem au lieu de 04rem */
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height:35%;
width: 100%;

.styledInput {
  background: rgba(255, 255, 255, 0.5); /* Correction: Suppression de l'espace entre rgba et les parenthèses */
  box-shadow: 0 8px 32px 0 rgb(179, 153, 170);
  border-radius: 2rem;
  width: 80%;
  height: 2rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;

  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
  }

  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
}

  }
`;
const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .styledButton {
    background: linear-gradient rgb(179, 153, 170);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 65%;
    height: 3rem;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
  }
`;

const OrSignUp = styled.h4`
  cursor: pointer;
`;
export default Login;
