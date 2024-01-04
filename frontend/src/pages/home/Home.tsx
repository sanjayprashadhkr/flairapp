import React from "react";
import { useEffect } from "react";
import { Hero } from "../../components/hero/Hero";
import "../App.css";
// import { updateUser } from "../reducers/userreducer";
// import { useDispatch } from "react-redux";
import { FeautureProduct } from "../../components/featureproduct/FeautureProduct";
export const Home = () => {
  // const dispatch = useDispatch();

  return (
    <>
      <Hero />
      <FeautureProduct id1={0} id2={1} id3={2} id4={3} category="Deals" />
      <FeautureProduct
        id1={4}
        id2={5}
        id3={6}
        id4={7}
        category="New Arrivals"
      />
    </>
  );
};
