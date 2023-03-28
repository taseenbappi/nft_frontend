import React from "react";
import cardImg from "../../Assets/images/nft-card-img.png";
import userImg from "../../Assets/images/user-img.svg";
import userImg1 from "../../Assets/images/user-img-1.svg";
import "../../styles/Home/CreateSellNFT.scss";

const CreateSellNFT = () => {
  return (
    <div className="container" id="create-sell-nft-container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 col-lg-6 col-sm-12">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-md-6 col-lg-6 col-sm-12">
              <div className="row g-5">
                <div className="col-12 col-md-6 col-lg-12 col-sm-12">
                  <div className="create-sell-nft-card">
                    <img src={cardImg} alt="" className="d-block" />
                    <img
                      src={userImg}
                      alt=""
                      width={"80px"}
                      className="create-sell-nft-card-user-img"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-12 col-sm-12">
                  <div className="create-sell-nft-card">
                    <img src={cardImg} alt="" className="d-block" />
                    <img
                      src={userImg1}
                      alt=""
                      width={"80px"}
                      className="create-sell-nft-card-user-img"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-sm-12">
              <div className="create-sell-nft-card">
                <img src={cardImg} alt="" className="d-block" />
                <img
                  src={userImg1}
                  alt=""
                  width={"80px"}
                  className="create-sell-nft-card-user-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-sm-12">
          <h2 className="title-2">Create and sell your NFTs</h2>
          <p
            className="body-3"
            style={{ marginBottom: "30px", marginTop: "40px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </p>
          <button className="primary-btn">Sign Up Now</button>
        </div>
      </div>
    </div>
  );
};

export default CreateSellNFT;
