import React from "react";
import "../../styles/Home/AmazeNFT.scss";
import icon1 from "../../Assets/icon/amaze-nft-icon-1.svg";
import icon2 from "../../Assets/icon/amaze-nft-icon-2.svg";
import AmazeNFTCard from "./AmazeNFTCard";

const AmazeNFT = () => {
  const data = [
    {
      title: "Fast Transaction",
      sub_title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.",
      icon: icon1,
    },
    {
      title: "Growth Transaction",
      sub_title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus",
      icon: icon2,
    },
  ];
  return (
    <div className="container-fluid" id="amaze-nft-container">
      <div className="container">
        <div className="row ">
          <div className="col-12 col-md-12 col-lg-4 col-sm-12">
            <h2 className="title-2 amaze-title">
              The amazing NFT art of the world here
            </h2>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-sm-12">
            <AmazeNFTCard
              item={{
                title: "Fast Transaction",
                sub_title:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.",
                icon: icon1,
              }}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-sm-12">
            <AmazeNFTCard
              item={{
                title: "Growth Transaction",
                sub_title:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus",
                icon: icon2,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazeNFT;
