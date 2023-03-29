import React from "react";
import img from "../../Assets/images/top-collection-img-1.png";
import userImg from "../../Assets/images/user-img.svg";
import "../../styles/Home/TopNFTsFeaturedCard.scss";
import { ReactComponent as Ethereum } from "../../Assets/icon/euthereum-black-icon.svg";

const TopNFTsFeaturedCard = () => {
  return (
    <div id="top-nft-featured-card">
      <img
        src={img}
        alt=""
        className="img-fluid pb-4 w-100"
        // style={{ maxHeight: "350px", objectFit: "cover" }}
      />
      <div className="top-nft-featured-card-footer">
        <div className="d-flex align-items-center " style={{ gap: "10px" }}>
          <img src={userImg} alt="" className="img-fluid " width="48px" />
          <div>
            <p className="body-2 mb-1">The Futr Abstr</p>
            <p className="body-4">10 in the stock</p>
          </div>
        </div>
        <div className="top-nft-highest-bit-box">
          <p className="body-4 mb-1">Highest Bid</p>
          <p
            className="body-2 d-flex align-items-center"
            style={{ gap: "8px" }}
          >
            <Ethereum />
            0.25 ETH
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopNFTsFeaturedCard;
