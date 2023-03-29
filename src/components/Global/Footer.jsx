import React from "react";
import { ReactComponent as Facebook } from "../../Assets/icon/facebook.svg";
import { ReactComponent as Twitter } from "../../Assets/icon/twitter.svg";
import { ReactComponent as Linkedin } from "../../Assets/icon/linkedin.svg";
import "../../styles/Global/Footer.scss";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div id="footer-container" className="container mx-atuo">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 ">
            <h2 className="title-2" style={{ marginBottom: "16px" }}>
              NFters
            </h2>
            <p className="body-3">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
            <div
              className="d-flex pb-3"
              style={{ gap: "16px", marginTop: "24px" }}
            >
              <div>
                <Facebook />
              </div>
              <div>
                <Twitter />
              </div>
              <div>
                <Linkedin />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-2 ">
            <p className="body-2 mb-4">Market Place</p>
            <div className="d-flex flex-column" style={{ gap: "8px" }}>
              <p className="footer-item">All NFTs</p>
              <p className="footer-item">New</p>
              <p className="footer-item">Art</p>
              <p className="footer-item">Sports</p>
              <p className="footer-item">Utility</p>
              <p className="footer-item">Music</p>
              <p className="footer-item">Domain Name</p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-2 ">
            <p className="body-2 mb-4">My Account</p>
            <div className="d-flex flex-column" style={{ gap: "8px" }}>
              <p className="footer-item">Profile</p>
              <p className="footer-item">Favorite</p>
              <p className="footer-item">My Collections</p>
              <p className="footer-item">Settings</p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 ">
            <div className="d-flex flex-column" style={{ gap: "24px" }}>
              <p className="body-2">Stay in the loop</p>
              <p className="body-3">
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating
                NFTs.
              </p>
              <div className="subscribe-email">
                <input
                  className="subscribe-email-input"
                  type="email"
                  autoComplete="off"
                  placeholder="Enter your email"
                />
                <button className="subscribe-btn">Subscibe Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
