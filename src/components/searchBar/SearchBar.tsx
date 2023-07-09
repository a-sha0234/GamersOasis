import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { searchQuery, selectSearchQuery } from "../../redux/searchbar";
import { useSelector, useDispatch } from "react-redux";
import styles from "./searchbar.module.css";
import styled from "styled-components";
import { motion } from "framer-motion";

const Searchbar = styled.input`
  font-size: 1.2rem;
  padding: 6px;
  width: 190%;
  background-color: #3c3c3c;
  border: none;
  color: white;
  border-radius: 5px;
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
      <motion.div
        whileHover={{ scale: 1.02 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        <Searchbar
          type="text"
          placeholder="search games..."
          value={searchQueryValue}
          onChange={handleSearch}
          // className={styles.searchbar}
          // size={50}
        />
      </motion.div>
    </>
  );
}
