import GameCard from "../common/gameCard/GameCard";
import { useGetAllGamesQuery } from "../../redux/games";
import { useState, useEffect } from "react";

export default function GameGrid() {
  const { data, error, isLoading } = useGetAllGamesQuery({});
  // need to filter data here
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
