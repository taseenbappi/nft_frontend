import React from "react";
import img from "../../Assets/images/top-collection-user-img.svg";
import { ReactComponent as Ethereum } from "../../Assets/icon/euthereum-black-icon.svg";
import { ReactComponent as Verify } from "../../Assets/icon/verify-icon.svg";
import "../../styles/Home/TopCollectionUser.scss";

const TopCollectionUser = () => {
  return (
    <div id="top-collection-user-card">
      <div className="top-collection-user-context">
        <p className="body-2">1</p>
        <div className="position-relative">
          <img src={img} alt="" width="60px" />
          <div className="position-absolute top-0 end-0 bg-white rounded-4">
            <Verify />
          </div>
        </div>

        <div>
          <p className="body-2 pb-2">CryptoFunks</p>
          <p
            className="body-3 d-flex align-items-center"
            style={{ gap: "6px" }}
          >
            <Ethereum />
            19,769.39
          </p>
        </div>
        <p className="body-2" style={{ color: "#14C8B0" }}>
          +26.52%
        </p>
      </div>
      <hr style={{ opacity: 0.1 }} />
    </div>
  );
};

export default TopCollectionUser;
