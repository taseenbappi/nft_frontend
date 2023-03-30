import React from "react";
import TopCollectionUser from "./TopCollectionUser";
import "../../styles/Home/TopCollectionOver.scss";

const TopCollectionOver = () => {
  const top_nft_sell = [
    {
      id: 1,
      title: "CryptoFunks",
      total_eth: "19,769.39",
      inc_v: "+26.52%",
    },
    {
      id: 2,
      title: "Frensware",
      total_eth: "9,232.39",
      inc_v: "+2.52%",
    },
    {
      id: 3,
      title: "PunkArt",
      total_eth: "3,769.39",
      inc_v: "+1.52%",
    },
    {
      id: 4,
      title: "Art Crypto",
      total_eth: "10,769.39",
      inc_v: "+2.52%",
    },
  ];
  return (
    <div id="top-collection-over">
      <h2 className="title-2">Top Collections over</h2>
      <p
        className="body-2"
        style={{ color: "#3D00B7", marginTop: "10px", marginBottom: "24px" }}
      >
        Last 7 days
      </p>
      {top_nft_sell?.map((item, idx) => (
        <TopCollectionUser key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TopCollectionOver;
