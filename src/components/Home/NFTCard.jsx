import React from "react";
import cardImg from "../../Assets/images/nft-card-img.png";
import bittingUserImg from "../../Assets/images/bitting-user-img.svg";
import { ReactComponent as Ethereum } from "../../Assets/icon/ethereum-icon.svg";
import "../../styles/Home/NFTCard.scss";

const NFTCard = ({ item }) => {
  return (
    <div className="col">
      <div className="card h-100 w-100" id="nft-card">
        <div>
          <img src={item?.image} className="card-img-top card-img" alt="..." />
          <div className="bitting-user-pic-holder">
            <img
              src={bittingUserImg}
              className="img-fluid bitting-user-img"
              alt="..."
              width="30px"
            />
            <img
              src={bittingUserImg}
              className="img-fluid bitting-user-img"
              alt="..."
              width="30px"
            />
            <img
              src={bittingUserImg}
              className="img-fluid bitting-user-img"
              alt="..."
              width="30px"
            />
            <img
              src={bittingUserImg}
              className="img-fluid bitting-user-img"
              alt="..."
              width="30px"
            />
          </div>
        </div>
        <div className="card-body pb-1">
          <h5 className="nft-card-title">{item?.title}</h5>
          <div className="d-flex justify-content-between align-items-center">
            <p
              className="nft-card-body-txt d-flex align-items-center"
              style={{ color: "#00AC4F", gap: "6px" }}
            >
              <Ethereum />
              {item?.euthereum}
            </p>
            <p className="nft-card-body-txt" style={{ color: "#838383" }}>
              1 of 321
            </p>
          </div>
          <hr style={{ color: "1.06366px dashed #F4F4F4", opacity: 0.2 }} />
          <div className="d-flex justify-content-between align-items-center">
            <p
              className="nft-card-body-txt-2 d-flex align-items-center "
              style={{
                padding: "4px 10px",
                background: "#F5F5F5",
                borderRadius: "109.706px",
              }}
            >
              {item?.time}
            </p>
            <p className="nft-card-body-txt-2">Place a bid</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
