import React from "react";
import "../../styles/Home/DiscoverNFTs.scss";
import { ReactComponent as FilterIcon } from "../../Assets/icon/filter-icon.svg";
import NFTCard from "./NFTCard";

const DiscoverNFTs = () => {
  return (
    <div className="container-fluid" id="discover-nft-container">
      <div className="container">
        <h2 className="title-2">Discover more NFTs</h2>
        <div className="filter-btn-bar">
          <div className="filter-btn-holder">
            <button className="filter-btn">All Categories</button>
            <button className="filter-btn">Art</button>
            <button className="filter-btn">Celebrities</button>
            <button className="filter-btn">Gaming</button>
            <button className="filter-btn">Sports</button>
            <button className="filter-btn">Music</button>
            <button className="filter-btn">Crypto</button>
          </div>
          <button className="all-filter-btn">
            <FilterIcon />
            All Filters
          </button>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 nft-card-container">
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
        </div>
        <button className="secondary-btn d-block m-auto">More NFTs</button>
      </div>
    </div>
  );
};

export default DiscoverNFTs;
