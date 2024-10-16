import React from "react";
import "./RestaurantShimmer.css";

const RestaurantShimmer = () => {
  return (
    <div className="shimmer-wrapper">
      <div className="shimmer shimmer-title" />

      <div className="shimmer shimmer-text" />

      <div className="shimmer shimmer-text" style={{ width: "80%" }} />
      <div className="shimmer shimmer-text" style={{ width: "60%" }} />

      <div className="shimmer shimmer-rectangle" style={{ height: "80px" }} />

      <div className="shimmer shimmer-title" style={{ width: "120px" }} />

      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="shimmer shimmer-text" style={{ width: "90%" }} />
        <div className="shimmer shimmer-circle" />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="shimmer shimmer-text" style={{ width: "90%" }} />
        <div className="shimmer shimmer-circle" />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="shimmer shimmer-text" style={{ width: "90%" }} />
        <div className="shimmer shimmer-circle" />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="shimmer shimmer-text" style={{ width: "90%" }} />
        <div className="shimmer shimmer-circle" />
      </div>
    </div>
  );
};

export default RestaurantShimmer;
