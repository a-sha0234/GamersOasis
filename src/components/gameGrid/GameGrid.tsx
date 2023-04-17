import GameCard from "../common/gameCard/GameCard";
import { useGetAllGamesQuery } from "../../redux/games";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../redux/filter";

export default function GameGrid() {
  const { data, error, isLoading } = useGetAllGamesQuery({});
  const currentFilter = useSelector(selectFilter);
  // need to filter data here

  // if filter is rating or wishlist(redux for wishlist) do something else
  // if filter is under genres it: rpg than do this

  return (
    <div>
      <button>Filter: none</button>
      <button>Filter by ...</button>
      <p>Display options:</p>
      <button>grid</button>
      <button>Column</button>

      {data &&
        data.map((data: any) => {
          return <GameCard data={data} />;
        })}
    </div>
  );
}
