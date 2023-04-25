import {
  useGetGameByIdQuery,
  useGetGamePlatformByIdQuery,
  useGetGameImagesByIdQuery,
} from "../../redux/games";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function GamePage() {
  const { id } = useParams();

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

  return (
    <div>
      {loadingImages === false && <img src={`${images[0].image_url}`} />}
      <div>
        <button>Add to cart +</button>
      </div>

      <article>
        <h2>About</h2>
        <p></p>
        {showMore && <p>More text</p>}
        <button onClick={showmore}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </article>
    </div>
  );
}
