import React from "react";
import "../../styles/Home/Hero.scss";
import img from "../../Assets/images/hero-img.png";

const Hero = () => {
  return (
    <div
      className="container"
      style={{ marginTop: "60px", marginBottom: "122px" }}
    >
      <div className="row align-items-center">
        <div className="col-12 col-md-12 col-lg-6 col-sm-12">
          <h1 className="title-1 " style={{ marginBottom: "22px" }}>
            Discover, and collect Digital Art NFTs
          </h1>
          <p className="body-1" style={{ marginBottom: "41px" }}>
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <button className="primary-btn">Explore Now</button>
          <div className="d-flex" style={{ gap: "22px", marginTop: "30px" }}>
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
        <div className="col-12 col-md-12 col-lg-6 col-sm-12">
          <img src={img} alt="" className="img-fluid ms-auto d-block" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
