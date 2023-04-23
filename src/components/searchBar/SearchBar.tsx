import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { searchQuery, selectSearchQuery } from "../../redux/searchbar";
import { useSelector, useDispatch } from "react-redux";

export default function SearchBar() {
  const searchQueryValue = useSelector(selectSearchQuery);
  const dispatch = useDispatch();

  function handleSearch(e: any) {
    dispatch(searchQuery(e.target.value));
  }

  // console.log(searchQueryValue.value);

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={searchQueryValue}
        onChange={handleSearch}
      ></input>
      <span>
        <BsSearch />
      </span>
    </div>
  );
}
