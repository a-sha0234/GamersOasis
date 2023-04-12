import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useGetAllGamesQuery, gamesApi } from "../../redux/games";
import background from "../../public/home.gif";
import styles from "./home.module.css";

export default function Home() {
  const { data } = useGetAllGamesQuery({});
  console.log(data);
  return <div className={styles.container}>sdfsf</div>;
}
