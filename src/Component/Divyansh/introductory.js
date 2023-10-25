import React from "react";
import { Button } from "reactstrap";

const introductory = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          margin: "100px",
        }}
      >
        <h1>Start the Life of Your Dreams</h1>
        <p style={{ color: "#D95622", fontSize: "18px" }}>
          Live a healthier, wealthier, more fulfilling, passionate and
          purposeful life.
        </p>
        <p>
          We want to share that passion with our customers who come far and wide
          to enjoy the food we have spent sleepless nights thinking up, testing,
          and producing.
        </p>
        <Button type="submit">View More</Button>
      </div>
      <div>
        <img
          src="../home_01_img_01.png"
          style={{ width: "100%" }}
          alt="Your Image"
        />
      </div>
    </div>
  );
};

export default introductory;
