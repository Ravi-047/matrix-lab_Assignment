import React, { useState } from "react";
import "./topnav.css";
import hamburger from "../../assets/hamburger.svg";
import { useWeb3Modal } from "@web3modal/react";

import search from "../../assets/search.svg";
import Sidebar from "../Sidebar/Sidebar";

const TopNav = () => {
  const { open } = useWeb3Modal();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="topnav_main">
      <div className="topNav_desktop">
        <div className="topnav_searchbar">
          <input
            type="text"
            name="search"
            placeholder="Search"
            autoComplete="off"
          />
          <img src={search} alt="search" />
        </div>
        <div className="topnav_connect">
          <button onClick={() => open()}>Connect</button>
        </div>
      </div>

      <div className="topNav_mob">
        <div className="mob_option">
          <div className="mob_option_menu" onClick={() => setIsOpen(!isOpen)}>
            <img src={hamburger} alt="hamburger" />
            <div>NFTify</div>
          </div>
          <button className="mob_connect" onClick={() => open()}>
            Connect
          </button>
        </div>

        <div>
          <div className="topnav_searchbar mob">
            <input
              type="text"
              name="search"
              placeholder="Search"
              autoComplete="off"
            />
            <img src={search} alt="search" />
          </div>
        </div>
      </div>

      {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default TopNav;
