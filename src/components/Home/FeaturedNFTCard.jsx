import React from "react";
import img1 from "../../Assets/images/featured-card-img-1.png";
import img2 from "../../Assets/images/featured-card-img-2.png";
import img3 from "../../Assets/images/featured-card-img-3.png";
import img4 from "../../Assets/images/featured-card-img-4.png";
import userImg from "../../Assets/images/user-img.svg";
import "../../styles/Home/FeaturedNFTCard.scss";

const FeaturedNFTCard = () => {
  return (
    <div className="col">
      <div className="featured-nft-card h-100">
        <div className="row g-2 pb-4">
          <div className="col-8 col-sm-8 col-md-8 col-lg-8">
            <img
              src={img1}
              alt=""
              className="img-fluid h-100 object-fit-cover"
            />
          </div>
          <div
            className="col-4 col-sm-4 col-md-4 col-lg-4 d-flex flex-column justify-content-between"
            style={{ gap: "8px" }}
          >
            <img src={img2} alt="" className="img-fluid" />
            <img src={img3} alt="" className="img-fluid" />
            <img src={img4} alt="" className="img-fluid" />
          </div>
        </div>
        <p className="body-2">Amazing Collection</p>
        <div className="featured-nft-card-footer">
          <div className="d-flex align-items-center " style={{ gap: "10px" }}>
            <img src={userImg} alt="" className="img-fluid " width="28px" />
            <p className="body-4">by Taseen Bappi</p>
          </div>
          <div className="total-items-box">
            <p className="body-4">Total 54 Items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNFTCard;
