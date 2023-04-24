import {
  useGetGameByIdQuery,
  useGetGamePlatformByIdQuery,
  useGetGameImagesByIdQuery,
} from "../../redux/games";
import { useParams } from "react-router-dom";

export default function GamePage() {
  const { id } = useParams();
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

  // console.log(images[0].image_url);
  // console.log(images[0].image_url);
  return (
    <div>
      {loadingImages === false && <img src={``} alt="Your image description" />}
    </div>
  );
}
