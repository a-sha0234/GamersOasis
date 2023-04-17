import { AiFillHeart } from "react-icons/ai";
import * as React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWish, removeWish, selectFilter } from "../../../redux/wishlist";

interface Props {
  data: any;
}

const GameCard: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const [wishlist, setWishList] = useState(false);

  const hello = useSelector(selectFilter);

  function wishlistChange(e: any) {
    setWishList((prev) => !prev);
    if (wishlist === true) {
      dispatch(addWish(data.id));
      console.log(hello);
    } else if (wishlist == false) {
      dispatch(removeWish(data.id));
      console.log(hello);
    }
  }

  return (
    <div className={data.id}>
      <a href={`/store/${data.id}`}>
        <img />
      </a>
      <button>Add to cart +</button>
      <button onClick={wishlistChange}>
        <AiFillHeart color={wishlist == false ? "black" : "red"} />
      </button>
    </div>
  );
};

export default GameCard;
