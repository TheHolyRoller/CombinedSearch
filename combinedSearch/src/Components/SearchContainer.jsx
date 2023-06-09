import React from "react";
import { FaSearch } from "react-icons/fa";

// Import the stylesheet here 
// import S from '../Styles/SearchBar.css'; 
import S from '../Styles/SearchContainer.module.css'; 


function SearchContainer() {
  return (
    <div className={S.container }tabIndex="1">
      <div className={S.searchContainer} tabIndex="1">
        <input  style={{minHeight: "1rem"}}  type="text" placeholder="search" />
        <a href="my" className={S.button}>
          <FaSearch />
          </a>
      </div>
    </div>
  );
}

export default SearchContainer;
