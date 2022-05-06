import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { searchTerm } = useGlobalContext();
  const searchValue = React.useRef("");
  return (
    <section className="section">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" id="name" ref={searchValue}></input>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
