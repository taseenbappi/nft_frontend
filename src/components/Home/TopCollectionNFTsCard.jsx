import React from "react";
import img2 from "../../Assets/images/featured-card-img-2.png";
import userImg from "../../Assets/images/user-img-1.svg";
import { ReactComponent as Ethereum } from "../../Assets/icon/ethereum-icon.svg";

const TopCollectionNFTsCard = () => {
  return (
    <div className="d-flex " style={{ gap: "8px" }}>
      <img src={img2} alt="" className="img-fluid object-fit-cover" />
      <div>
        <p className="body-2 pb-2">The Futr Abstr</p>
        <div
          className="d-flex justify-content-between align-items-center pb-2"
          style={{ gap: "8px" }}
        >
          <img src={userImg} alt="" className="img-fluid" width="34px" />
          <p
            className="body-4 d-flex align-items-center"
            style={{
              color: "#00AC4F",
              gap: "6px",
              border: "1px solid #00AC4F",
              borderRadius: "6px",
              padding: "4px 8px",
            }}
          >
            <Ethereum />
            0.25 ETH
          </p>
          <p className="body-3">1 of 8</p>
        </div>
        <button className="place-bit-btn">Place a bid</button>
      </div>
    </div>
  );
};

export default TopCollectionNFTsCard;
