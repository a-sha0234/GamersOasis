import { AiFillHeart } from "react-icons/ai";
import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWish, removeWish, selectWishList } from "../../../redux/wishlist";

interface Props {
  data: any;
}

const GameCard: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const [wishlist, setWishList] = useState(false);

  const hello = useSelector(selectWishList);

  function wishlistChange(e: any) {
    setWishList((prev) => !prev);
  }

  useEffect(() => {
    if (wishlist === true) {
      dispatch(addWish(data.id));
    } else if (wishlist == false) {
      dispatch(removeWish(data.id));
    }
  }, [wishlist]);

  return (
    <div className={data.id}>
      <a href={`/store/${data.id}`}>
        <img />
      </a>
      <button>Add to cart +</button>
      <button onClick={wishlistChange}>
        <AiFillHeart color={wishlist == false ? "black" : "red"} />
      </button>
      <p>{data.rating}</p>
    </div>
  );
};

export default GameCard;
