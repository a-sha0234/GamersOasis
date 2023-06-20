import {
  useGetGameByIdQuery,
  useGetGamePlatformByIdQuery,
  useGetGameImagesByIdQuery,
} from "../../redux/games";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { addCart } from "../../redux/cart";
import { useDispatch } from "react-redux";
import Carousel from "../../components/ImageCarousel/Carousel";
// import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from "../../components/navbar/Navbar";
import { BsArrowLeftShort } from "react-icons/bs";
import styles from "./gamepage.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Sdescritpion = styled.p`
  margin-top: 5%;
  font-size: 1.2rem;
`;

export default function GamePage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [showMore, setShowMore] = useState(false);

  const {
    data: game,
    error: gameError,
    isLoading: loadingGame,
  } = useGetGameByIdQuery(id);
  const {
    data: platform,
    error: plaformError,
    isLoading: loadingPlatform,
  } = useGetGamePlatformByIdQuery(id);
  const {
    data: images,
    error: imageError,
    isLoading: loadingImages,
  } = useGetGameImagesByIdQuery(id);

  function showmore() {
    setShowMore((prev) => !prev);
  }

  function addToCart() {
    dispatch(addCart(game[0]));
  }
  console.log(game);

  return (
    <div>
      <Navbar />
      <div className={styles.gamepage__top}>
        <Link to="/store">
          <button className={styles.store__button}>
            <BsArrowLeftShort />
            store
          </button>
        </Link>
        <h1 className={styles.title}>
          {!loadingGame && <p>{game[0].title}</p>}
        </h1>
      </div>

      <div className={styles.gamepage__bottom}>
        <article className={styles.gamepage__carousel}>
          {loadingImages === false && <Carousel data={images} />}
        </article>
        <article className={styles.gamepage__bottom__about}>
          <h2>About</h2>
          {!loadingGame && <Sdescritpion>{game[0].descriptions}</Sdescritpion>}
          <div className={styles.gamepage__bottom__about__showmore}>
            {/*  */}
            {showMore && !loadingGame && (
              <div>
                <a href={game[0].link}>{game[0].title} Website </a>
                <p>Release: {game[0].release_date}</p>
                <p>Main Genre: {game[0].genre}</p>
                <p>Dvelopers:{game[0].developers} </p>
                <p>Publishers: {game[0].publishers}</p>
              </div>
            )}

            {showMore === true && loadingPlatform === false ? (
              <div style={{ display: "inline" }}>
                <span>Platforms:</span>
                {platform.map((data: any, index: number) => (
                  <span key={index}>{data.plaforms}</span>
                ))}
              </div>
            ) : (
              <></>
            )}
            <button onClick={showmore} className={styles.showmore__button}>
              {showMore ? (
                <>
                  Hide <IoIosArrowUp />
                </>
              ) : (
                <>
                  {" "}
                  Show More
                  <IoIosArrowDown />{" "}
                </>
              )}
            </button>
          </div>
          {/*  */}
        </article>
      </div>
      <div className={styles.cart}>
        {loadingGame == false && (
          <>
            <p>£{game[0].price}</p>
            <button onClick={addToCart}>Add to cart +</button>
          </>
        )}
      </div>
    </div>
  );
}
