import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { searchQuery, selectSearchQuery } from "../../redux/searchbar";
import { useSelector, useDispatch } from "react-redux";
import styles from "./searchbar.module.css";
import styled from "styled-components";

const Searchbar = styled.input`
  font-size: 1.2rem;
  padding: 5px;
  width: 190%;

  @media screen and (max-width: 779px) {
    width: 100%;
  }
`;

export default function SearchBar() {
  const searchQueryValue = useSelector(selectSearchQuery);
  const dispatch = useDispatch();

  function handleSearch(e: any) {
    dispatch(searchQuery(e.target.value));
  }

  return (
    <>
      <Searchbar
        type="text"
        placeholder="search games..."
        value={searchQueryValue}
        onChange={handleSearch}
        // className={styles.searchbar}
        // size={50}
      />
    </>
  );
}
