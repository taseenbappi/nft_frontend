import React from "react";
import "../../styles/Global/Header.scss";
import { ReactComponent as Search } from "../../Assets/icon/search-icon.svg";

const Header = () => {
  return (
    <nav
      id="header-container"
      className="navbar navbar-expand-lg bg-body-tertiary container-fluid"
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          NFters
        </a>
        <div
          className="collapse navbar-collapse justify-content-between align-items-center py-4"
          id="navbarTogglerDemo01"
        >
          <ul
            className="navbar-nav justify-content-between mb-2 mb-lg-0 ms-auto "
            style={{ gap: "16px" }}
          >
            <li className="nav-item">
              <a
                className="nav-link active nav-menu"
                aria-current="page"
                href="#"
              >
                Marketplace
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-menu" href="#">
                Resource
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-menu">About</a>
            </li>
            <li className="nav-item">
              <div className="header-search-box">
                <input type="text" placeholder="Search" className="" />
                <Search />
              </div>
            </li>
            <li className="nav-item">
              <button className="header-primary-btn">Upload</button>
            </li>
            <li className="nav-item">
              <button className="header-secondary-btn ">Connect Wallet</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
