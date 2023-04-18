import GameCard from "../common/gameCard/GameCard";
import { useGetAllGamesQuery } from "../../redux/games";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../redux/filter";

export default function GameGrid() {
  const { data, error, isLoading } = useGetAllGamesQuery({});
  const currentFilter = useSelector(selectFilter);

  // ================================================
  // need to filter data here

  // if filter is rating reorder array
  // if wishlist(redux for wishlist) do something else
  // if filter is anything else  it: rpg than do this

  // const cards = data.map((prev: any) => {
  //   return <GameCard data={data} />;
  // });

  const [FilteredData, setFilteredData] = useState();

  console.log(currentFilter);

  if (currentFilter === "rating") {
    const sortedData = Array.from(data).sort(
      (a: any, b: any) => Number(a.rating) - Number(b.rating)
    );
  } else if (currentFilter == "wishlist") {
  }

  // ================================================

  return (
    <div>
      <button>Filter: none</button>
      <button>Filter by ...</button>
      <p>Display options:</p>
      <button>grid</button>
      <button>Column</button>
      {/* {FilterData()} */}
      {data &&
        data.map((data: any) => {
          return <GameCard data={data} />;
        })}
    </div>
  );
}
