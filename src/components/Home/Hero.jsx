import React from "react";
import img from "../../Assets/images/hero-img.png";
import { ReactComponent as ActionLive } from "../../Assets/images/live-action.svg";
import "../../styles/Home/Hero.scss";

const Hero = () => {
  return (
    <div id="hero" className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-12 col-lg-6 col-sm-12">
          <h1 className="title-1 " style={{ marginBottom: "22px" }}>
            Discover, and collect Digital Art NFTs
          </h1>
          <p className="body-1 hero-sub-title">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <button className="primary-btn">Explore Now</button>
          <div className="hero-summary-content">
            <div>
              <h1 className="title-1 m-0">98k+</h1>
              <p className="body-1">Artwork</p>
            </div>
            <div>
              <h1 className="title-1 m-0">12k+</h1>
              <p className="body-1">Auction</p>
            </div>
            <div>
              <h1 className="title-1 m-0">15k+</h1>
              <p className="body-1">Artist</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6 col-sm-12 text-center">
          <div className="hero-slider-img">
            <img src={img} alt="" className="img-fluid " />
            <ActionLive />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
