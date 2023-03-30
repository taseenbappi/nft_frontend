import React from "react";
import img from "../../Assets/images/top-collection-user-img.svg";
import { ReactComponent as Ethereum } from "../../Assets/icon/euthereum-black-icon.svg";
import { ReactComponent as Verify } from "../../Assets/icon/verify-icon.svg";
import "../../styles/Home/TopCollectionUser.scss";

const TopCollectionUser = ({ item }) => {
  return (
    <div id="top-collection-user-card">
      <div className="top-collection-user-context">
        <p className="body-2">{item?.id}</p>
        <div className="position-relative">
          <img src={img} alt="" width="60px" />
          <div className="position-absolute top-0 end-0 bg-white rounded-4">
            <Verify />
          </div>
        </div>

        <div>
          <p className="body-2 pb-2">{item?.title}</p>
          <p
            className="body-3 d-flex align-items-center"
            style={{ gap: "6px" }}
          >
            <Ethereum />
            {item?.total_eth}
          </p>
        </div>
        <p className="body-2" style={{ color: "#14C8B0" }}>
          {item?.inc_v}
        </p>
      </div>
      <hr style={{ opacity: 0.1 }} />
    </div>
  );
};

export default TopCollectionUser;
