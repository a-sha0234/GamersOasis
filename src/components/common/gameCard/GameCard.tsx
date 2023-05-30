import { AiFillHeart } from "react-icons/ai";
import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWish, removeWish, selectWishList } from "../../../redux/wishlist";
import { addCart, selectCart } from "../../../redux/cart";
import Carousel from "../../ImageCarousel/Carousel";
import styles from "./gamecard.module.css";
import styled from "styled-components";

interface Props {
  data: any;
}
interface coverImg {
  cover: any;
}

const ScoverImg = styled.div<coverImg>`
  background-image: url(${(props) => props.cover});
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 100%;
`;

const GameCard: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const [wishlist, setWishList] = useState(false);

  // const hello = useSelector(selectWishList);
  let o = useSelector(selectCart);
  function wishlistChange(e: any) {
    setWishList((prev) => !prev);
    e.preventDefault();
  }

  useEffect(() => {
    if (wishlist === true) {
      dispatch(addWish(data.id));
    } else if (wishlist == false) {
      dispatch(removeWish(data.id));
    }
  }, [wishlist]);

  function addToCart(e: any) {
    dispatch(addCart(data));
    // dispatch(addCart(data));
    console.log(o);
    e.preventDefault();
  }

  console.log(data);
  return (
    <div className={styles.card}>
      <a href={`/store/${data.id}`} className={styles.image}>
        <div className={data.id}>
          {/* <img src={data.cover} width={300} height={300} /> */}
          {/* <img
            src={data.cover}
            className={styles.img}
            // width={300}
            // height={300}
          />{" "} */}
          {/* <article
            style={{
              backgroundImage: `url(${data.cover})`,
              width: "100%",
              height: "100%",
            }}
          ></article> */}
          <ScoverImg cover={data.cover}></ScoverImg>
          <article className={styles.card__top}>
            <button onClick={addToCart}>Add to cart +</button>
            <p>£{data.price}</p>
          </article>
          <p className={styles.card__title}>{data.title}</p>
          <article className={styles.card__bottom}>
            <button onClick={wishlistChange}>
              <AiFillHeart
                color={wishlist == false ? "black" : "red"}
                fontSize={25}
              />
            </button>
          </article>
        </div>
      </a>
    </div>
  );
};

export default GameCard;
