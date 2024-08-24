import React from "react";
import "./RestaurantShimmer.css";

const RestaurantShimmer = () => {
  return (
    <div className="shimmer-wrapper">
      {/* Header Section Shimmer */}
      <div className="shimmer shimmer-title" />

      {/* Rating Section Shimmer */}
      <div className="shimmer shimmer-text" />

      {/* Address and Timing Shimmer */}
      <div className="shimmer shimmer-text" style={{ width: "80%" }} />
      <div className="shimmer shimmer-text" style={{ width: "60%" }} />

      {/* Offer Cards Shimmer */}
      <div className="shimmer shimmer-rectangle" style={{ height: "80px" }} />

      {/* Recommended Items Shimmer */}
      <div className="shimmer shimmer-title" style={{ width: "120px" }} />

      {/* Menu Items Shimmer */}
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
