import React from "react";
import "../../styles/Home/TopCollectionNFTs.scss";
import TopCollectionNFTsCard from "./TopCollectionNFTsCard";
import TopCollectionOver from "./TopCollectionOver";
import TopNFTsFeaturedCard from "./TopNFTsFeaturedCard";

const TopCollectionNFTs = () => {
  return (
    <div className="container" id="top-collection-nft">
      <div className="row g-5">
        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
          <TopNFTsFeaturedCard />
        </div>
        <div
          className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-column justify-content-between"
          style={{ gap: "10px" }}
        >
          <TopCollectionNFTsCard />
          <TopCollectionNFTsCard />
          <TopCollectionNFTsCard />
        </div>
        <div className="col-12 col-sm-12 col-md-10 col-lg-4 mx-auto">
          <TopCollectionOver />
        </div>
      </div>
    </div>
  );
};

export default TopCollectionNFTs;
