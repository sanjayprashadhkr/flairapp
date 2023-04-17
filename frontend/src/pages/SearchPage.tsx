import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../components/Home/Card";

export const SearchPage = () => {
  const searchResults = useSelector((state: any) => state.searchresult);
  console.log(searchResults.value);

  if (searchResults.value.length === 0) return <div>Not Found</div>;
  else
    return (
      <div>
        {searchResults.value.map((card: any) => (
          <Card
            key={card.productId}
            cloth={card.productImage}
            name={card.productName}
            productid={card.productId}
            price={card.price}
          />
        ))}
      </div>
    );
};
