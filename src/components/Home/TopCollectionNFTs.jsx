import React from "react";
import "../../styles/Home/TopCollectionNFTs.scss";
import TopCollectionNFTsCard from "./TopCollectionNFTsCard";
import TopCollectionOver from "./TopCollectionOver";
import TopNFTsFeaturedCard from "./TopNFTsFeaturedCard";

const TopCollectionNFTs = () => {
  return (
    <div className="container" id="top-collection-nft">
      <div class="row g-5">
        <div class="col-6 col-md-4">
          <TopNFTsFeaturedCard />
        </div>
        <div
          class="col-6 col-md-4 d-flex flex-column justify-content-between"
          style={{ gap: "10px" }}
        >
          <TopCollectionNFTsCard />
          <TopCollectionNFTsCard />
          <TopCollectionNFTsCard />
        </div>
        <div class="col-6 col-md-4">
          <TopCollectionOver />
        </div>
      </div>
    </div>
  );
};

export default TopCollectionNFTs;
