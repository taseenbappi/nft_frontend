import React from "react";
import TopCollectionUser from "./TopCollectionUser";
import "../../styles/Home/TopCollectionOver.scss";

const TopCollectionOver = () => {
  return (
    <div id="top-collection-over">
      <h2 className="title-2">Top Collections over</h2>
      <p
        className="body-2"
        style={{ color: "#3D00B7", marginTop: "10px", marginBottom: "24px" }}
      >
        Last 7 days
      </p>
      <TopCollectionUser />
      <TopCollectionUser />
      <TopCollectionUser />
      {/* <TopCollectionUser /> */}
    </div>
  );
};

export default TopCollectionOver;
