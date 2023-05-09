import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { searchQuery, selectSearchQuery } from "../../redux/searchbar";
import { useSelector, useDispatch } from "react-redux";
import styles from "./searchbar.module.css";

export default function SearchBar() {
  const searchQueryValue = useSelector(selectSearchQuery);
  const dispatch = useDispatch();

  function handleSearch(e: any) {
    dispatch(searchQuery(e.target.value));
  }

  // console.log(searchQueryValue.value);

  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={searchQueryValue}
        onChange={handleSearch}
        className={styles.searchbar}
      ></input>
      <span>
        <BsSearch />
      </span>
    </>
  );
}
