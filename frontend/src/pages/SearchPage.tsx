import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../components/Home/Card";
import "./searchpage.css";

export const SearchPage = () => {
  const searchResults = useSelector((state: any) => state.searchresult);
  console.log(searchResults.value);

  if (searchResults.value.length === 0)
    return <div className="search-results-not-found">Not Found</div>;
  else
    return (
      <div className="search-page-results">
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
