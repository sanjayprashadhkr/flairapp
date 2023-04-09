import React from "react";

export const Description = ({ description }: any) => {
  const parts = description.split(".");
  console.log(parts);

  return (
    <div className="description">
      <ul style={{ fontSize: "16px", fontWeight: 400 }}>
        {parts.map((part: any) => {
          return <li>{part}</li>;
        })}
      </ul>
    </div>
  );
};
