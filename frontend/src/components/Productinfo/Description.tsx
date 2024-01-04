import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Description = ({ description, isLoading }: any) => {
  const parts = description.split(".");
  console.log(parts);

  return (
    <div className="description">
      <ul style={{ fontSize: "16px", fontWeight: 400 }}>
        {parts.map((part: any) => {
          return isLoading ? <li>{part}</li> : <Skeleton width={250} />;
        })}
      </ul>
    </div>
  );
};
