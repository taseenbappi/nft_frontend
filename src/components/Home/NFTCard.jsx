import React from "react";
import cardImg from "../../Assets/images/nft-card-img.png";
import bittingUserImg from "../../Assets/images/bitting-user-img.svg";
import { ReactComponent as Ethereum } from "../../Assets/icon/ethereum-icon.svg";
import "../../styles/Home/NFTCard.scss";

const NFTCard = () => {
  return (
    <div class="col">
      <div class="card h-100 " id="nft-card">
        <div>
          <img src={cardImg} class="card-img-top card-img" alt="..." />
          <div className="bitting-user-pic-holder">
            <img
              src={bittingUserImg}
              class="img-fluid bitting-user-img"
              alt="..."
              width="30px"
            />
            <img
              src={bittingUserImg}
              class="img-fluid bitting-user-img"
              alt="..."
              width="30px"
            />
            <img
              src={bittingUserImg}
              class="img-fluid bitting-user-img"
              alt="..."
              width="30px"
            />
            <img
              src={bittingUserImg}
              class="img-fluid bitting-user-img"
              alt="..."
              width="30px"
            />
          </div>
        </div>
        <div class="card-body">
          <h5 class="nft-card-title">ArtCrypto</h5>
          <div className="d-flex justify-content-between align-items-center">
            <p
              className="nft-card-body-txt d-flex align-items-center"
              style={{ color: "#00AC4F", gap: "6px" }}
            >
              <Ethereum />
              0.25 ETH
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
              3h 50m 2s left
            </p>
            <p className="nft-card-body-txt-2">Place a bid</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
