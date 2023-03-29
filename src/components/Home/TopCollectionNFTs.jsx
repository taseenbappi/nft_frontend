import React from "react";
import "../../styles/Home/TopCollectionNFTs.scss";
import TopCollectionNFTsCard from "./TopCollectionNFTsCard";
import TopCollectionOver from "./TopCollectionOver";
import TopNFTsFeaturedCard from "./TopNFTsFeaturedCard";

const TopCollectionNFTs = () => {
  return (
    <div className="container" id="top-collection-nft">
      <div class="row g-5">
        <div class="col-12 col-md-12 col-lg-6">
          <TopNFTsFeaturedCard />
        </div>
        <div
          class="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-between"
          style={{ gap: "10px" }}
        >
          <TopCollectionNFTsCard />
          <TopCollectionNFTsCard />
          <TopCollectionNFTsCard />
        </div>
        <div class="col-12 col-md-12 col-lg-6">
          <TopCollectionOver />
        </div>
      </div>
    </div>
  );
};

export default TopCollectionNFTs;
