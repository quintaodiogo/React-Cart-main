import React from "react";
const Search = () => {
  return (
    <div className="search-container">
      <a className="search-btn desktop" href="#">
        <i className="fas fa-search search"></i>
      </a>
      <input type="text" className="input desktop" name="searchBox" placeholder="Pesquisar Produtos" />
    </div>
  );
}

export default Search;
