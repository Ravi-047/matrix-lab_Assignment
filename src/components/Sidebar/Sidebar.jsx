import React, { useState } from "react";
import "./sidebar.css";

import logo from "../../assets/Vector.svg";
import token from "../../assets/ic_baseline-token.svg";
import boxbox from "../../assets/fluent_pair-24-filled.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const { isOpen, setIsOpen } = props;
  const [activeOption, setActiveOption] = useState("tokenAddress");

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className={`${isOpen ? "showNav" : "sidebar_main"}`}>
      {isOpen && (
        <div className={`navClose`} onClick={() => setIsOpen(!isOpen)}>
          &times;
        </div>
      )}
      <div className="sidebar_logo">
        <div className="logo_img">
          <img src={logo} alt="logo" />
        </div>
        <div className="logo_word">NFTify</div>
      </div>

      <Link
        to="/"
        className={`sidebar_option ${
          activeOption === "tokenAddress" ? "active" : ""
        }`}
        onClick={() => handleOptionClick("tokenAddress")}
      >
        <div className="option_img">
          <img src={token} alt="token" />
        </div>
        <div className="option_text">Token Address</div>
      </Link>

      <Link
        to="/pair_address"
        className={`sidebar_option option2 ${
          activeOption === "pairAddress" ? "active" : ""
        }`}
        onClick={() => handleOptionClick("pairAddress")}
      >
        <div className="option_img">
          <img src={boxbox} alt="boxbox" />
        </div>
        <div className="option_text">Pair Address</div>
      </Link>

      <div className="social_icon">
        <img src={facebook} alt="facebook" />
        <img src={linkedin} alt="linkden" />
        <img src={twitter} alt="twitter" />
      </div>
    </div>
  );
};

export default Sidebar;
