import React from "react";
import "../../styles/Home/AmazeNFTCard.scss";

const AmazeNFTCard = ({ item }) => {
  return (
    <div id="amaze-nft-card">
      <div>
        <img src={item.icon} alt="" className="img-fluid" width="34px" />
      </div>
      <div>
        <p className="body-2" style={{ marginBottom: "12px" }}>
          {item.title}
        </p>
        <p className="body-3">{item.sub_title}</p>
      </div>
    </div>
  );
};

export default AmazeNFTCard;
