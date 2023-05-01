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
    dispatch(addCart(game));
  }

  return (
    <div>
      {/* {loadingImages === false && <img src={`${images[0].image_url}`} />} */}
      <div>
        <button onClick={addToCart}>Add to cart +</button>
      </div>
      {loadingImages === false && <Carousel data={images} />}
      <article>
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
      </article>
    </div>
  );
}
