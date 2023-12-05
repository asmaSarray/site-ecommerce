import React from "react";
import "../components/footer.css";
const Footer = () => {
  return (
    <div className="style">
      <h5 className="title">
        &copy; {new Date().getFullYear()}
        <span className="site">my site name</span>
      </h5>
      <h5 className="title"> all rights reserved </h5>
    </div>
  );
};
/*const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  text-align: center;
  span {
    color: white;
  }
  h5 {
    color: white;
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;*/

export default Footer;
