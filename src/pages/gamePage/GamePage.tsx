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

  return (
    <div>
      <Navbar />
      <div className={styles.gamepage__top}>
        <button>
          <BsArrowLeftShort />
          store
        </button>
        <h1>{!loadingGame && <p>{game[0].title}</p>}</h1>
      </div>

      <div className={styles.gamepage__bottom}>
        <article className={styles.gamepage__carousel}>
          {loadingImages === false && <Carousel data={images} />}
        </article>
        <article className={styles.gamepage__bottom__about}>
          <h2>About</h2>
          {!loadingGame && <p>{game[0].descriptions}</p>}

          {showMore === true && loadingPlatform == false ? (
            platform.map((data: any) => <p>{data.plaforms}</p>)
          ) : (
            <></>
          )}

          <button onClick={showmore}>
            {showMore ? "Show Less" : "Show More"}
          </button>

          {/* <div className={styles.cart}>
            {loadingGame == false && (
              <>
                <p>£{game[0].price}</p>
                <button onClick={addToCart}>Add to cart +</button>
              </>
            )}
          </div> */}
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
