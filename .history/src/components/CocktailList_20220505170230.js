import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { Cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (Cocktails.length < 1) {
    <h2 className="section-title">
      No cocktails matched your search criteria
    </h2>;
  }

  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  );
};

export default CocktailList;
