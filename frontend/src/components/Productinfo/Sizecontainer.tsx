import React from "react";
import { useState } from "react";

export const Sizecontainer = () => {
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className="size-container">
      <div
        className={`sizebox ${selectedSize === "S" ? "selected" : ""}`}
        onClick={() => setSelectedSize("S")}
      >
        S
      </div>
      <div
        className={`sizebox ${selectedSize === "M" ? "selected" : ""}`}
        onClick={() => setSelectedSize("M")}
      >
        M
      </div>
      <div
        className={`sizebox ${selectedSize === "L" ? "selected" : ""}`}
        onClick={() => setSelectedSize("L")}
      >
        L
      </div>
    </div>
  );
};
