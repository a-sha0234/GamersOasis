import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useGetAllGamesQuery, gamesApi } from "../redux/games";

export default function Home() {
  const { data } = useGetAllGamesQuery({});
  console.log(data);
  return <div></div>;
}
