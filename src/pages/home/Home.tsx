import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useGetAllGamesQuery, gamesApi } from "../../redux/games";
import background from "../../public/home.gif";
import styles from "./home.module.css";
import MainPanel from "../../components/mainMenu/MainPanel";
import Menu1 from "../../components/menu1/Menu1";
import Menu2 from "../../components/menu2/Menu2";
import Navbar from "../../components/navbar/Navbar";
// import videoBackground from "../../../public/background1.mp4";

export default function Home() {
  return (
    <div>
      <video autoPlay muted loop className={styles.Videobackground}>
        <source
          src={process.env.PUBLIC_URL + "background1.mp4"}
          type="video/mp4"
        />{" "}
      </video>
      <div className={styles.nav}>
        <Navbar />
      </div>

      <section className={styles.container}>
        <section className={styles.left}>
          <article className="mainpanel">
            <MainPanel />
          </article>
          <article className="menu1">
            <Menu1 />
          </article>
        </section>
        {/*  */}

        <article className={styles.menu2}>
          <Menu2 />
        </article>
      </section>
    </div>
  );
}
