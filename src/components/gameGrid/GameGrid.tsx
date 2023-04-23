import GameCard from "../common/gameCard/GameCard";
import { useGetAllGamesQuery } from "../../redux/games";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter, clearFilter } from "../../redux/filter";
import { selectWishList } from "../../redux/wishlist";
import { selectSearchQuery } from "../../redux/searchbar";

export default function GameGrid() {
  const { data, error, isLoading } = useGetAllGamesQuery({});
  const currentFilter = useSelector(selectFilter);
  const dispatch = useDispatch();
  // ================================================

  const hello = useSelector(selectWishList);
  const searchBar = useSelector(selectSearchQuery);

  const [FilteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let filteredArr = data; // hold fetched data
    if (currentFilter == "rating") {
      // orders by rating
      filteredArr = Array.from(filteredArr).sort(
        (a: any, b: any) => Number(a.rating) + Number(b.rating)
      );
      setFilteredData(filteredArr);
    } else if (currentFilter == "wishlist") {
      // filter by whats in wishlist
      filteredArr = data.filter((info: any) => hello.value.includes(info.id));
      console.log(filteredArr);
      setFilteredData(filteredArr);
    } else if (currentFilter == "action") {
      filteredArr = data.filter((info: any) => info.genre == "action");
      setFilteredData(filteredArr);
    } else if (currentFilter == "stratagy") {
      filteredArr = data.filter((info: any) => info.genre == "stratagy");
      setFilteredData(filteredArr);
    } else if (currentFilter == "rpg") {
      filteredArr = data.filter((info: any) => info.genre == "rpg");
      setFilteredData(filteredArr);
    } else if (currentFilter == "Shooter") {
      filteredArr = data.filter((info: any) => info.genre == "Shooter");
      setFilteredData(filteredArr);
    } else if (currentFilter == "adventure") {
      filteredArr = data.filter((info: any) => info.genre == "adventure");
      setFilteredData(filteredArr);
    } else if (currentFilter == "puzzle") {
      filteredArr = data.filter((info: any) => info.genre == "puzzle");
      setFilteredData(filteredArr);
    } else if (currentFilter == "racing") {
      filteredArr = data.filter((info: any) => info.genre == "racing");
      setFilteredData(filteredArr);
    } else if (currentFilter == "sports") {
      filteredArr = data.filter((info: any) => info.genre == "sports");
      setFilteredData(filteredArr);
    } else {
      setFilteredData(filteredArr);
    }

    if (searchBar) {
      filteredArr = data.filter((info: any) =>
        info.title.toLowerCase().includes(searchBar.toLowerCase())
      );
      setFilteredData(filteredArr);
    }
  }, [data, currentFilter, hello, searchBar]);

  // ================================================

  function clearfilter() {
    dispatch(clearFilter());
  }

  return (
    <div>
      <button>Filter by ..s</button>
      <button onClick={clearfilter}>Clear Filter</button>
      <p>Display options:</p>
      <button>grid</button>
      <button>Column</button>

      {FilteredData &&
        FilteredData.map((data: any) => {
          return <GameCard data={data} />;
        })}
    </div>
  );
}
