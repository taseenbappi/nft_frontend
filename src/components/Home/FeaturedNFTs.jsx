import React from "react";
import "../../styles/Home/FeaturedNFTs.scss";
import FeaturedNFTCard from "./FeaturedNFTCard";

const FeaturedNFTs = () => {
  return (
    <div className="container-fluid" id="featured-nfts-container">
      <div className="container">
        <h2 className="title-2 collection-featured-nft-title">
          Collection Featured NFTs
        </h2>
        <div className="featured-nfts-card-container">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <FeaturedNFTCard />
            <FeaturedNFTCard />
            <FeaturedNFTCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNFTs;
