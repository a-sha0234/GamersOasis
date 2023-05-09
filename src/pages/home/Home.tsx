import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useGetAllGamesQuery, gamesApi } from "../../redux/games";
import background from "../../public/home.gif";
import styles from "./home.module.css";
import MainPanel from "../../components/mainMenu/MainPanel";
import LinkPanel1 from "../../components/menu1/Menu1";
import LinkPanel2 from "../../components/menu2/Menu2";

export default function Home() {
  return (
    <main className={styles.container}>
      <article className="mainpanel">
        <MainPanel />
      </article>
      <article className="linkpanel">
        <LinkPanel1 />
      </article>
      <article className="linkpanel2">
        <LinkPanel2 />
      </article>
    </main>
  );
}
