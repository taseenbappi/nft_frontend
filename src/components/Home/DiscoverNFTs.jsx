import React from "react";
import { ReactComponent as FilterIcon } from "../../Assets/icon/filter-icon.svg";
import NFTCard from "./NFTCard";
import cardImg1 from "../../Assets/images/nft-card-img.png";
import cardImg2 from "../../Assets/images/image-2.png";
import cardImg3 from "../../Assets/images/image-3.png";
import cardImg4 from "../../Assets/images/image-4.png";
import "../../styles/Home/DiscoverNFTs.scss";

const DiscoverNFTs = () => {
  const nft_data = [
    {
      title: "ArtCrypto",
      euthereum: "0.25 ETH",
      time: "4h 50m 2s left",
      image: cardImg1,
    },
    {
      title: "This NFT",
      euthereum: "0.55 ETH",
      time: "2h 50m 2s left",
      image: cardImg2,
    },
    {
      title: "NameCrypto",
      euthereum: "0.35 ETH",
      time: "5h 50m 2s left",
      image: cardImg3,
    },
    {
      title: "KingCrypto",
      euthereum: "0.57 ETH",
      time: "9h 50m 2s left",
      image: cardImg4,
    },
    {
      title: "NameCrypto",
      euthereum: "0.25 ETH",
      time: "3h 50m 2s left",
      image: cardImg4,
    },
    {
      title: "This NFT",
      euthereum: "0.25 ETH",
      time: "9h 50m 2s left",
      image: cardImg3,
    },
    {
      title: "ArtCrypto",
      euthereum: "0.25 ETH",
      time: "5h 50m 2s left",
      image: cardImg2,
    },
    {
      title: "KingCrypto",
      euthereum: "0.25 ETH",
      time: "6h 50m 2s left",
      image: cardImg1,
    },
  ];
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
          {nft_data?.map((item, idx) => (
            <NFTCard key={idx} item={item} />
          ))}
        </div>
        <button className="secondary-btn d-block m-auto">More NFTs</button>
      </div>
    </div>
  );
};

export default DiscoverNFTs;
