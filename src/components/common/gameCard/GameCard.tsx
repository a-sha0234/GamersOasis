import { AiFillHeart } from "react-icons/ai";
import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWish, removeWish, selectWishList } from "../../../redux/wishlist";
import { addCart, selectCart } from "../../../redux/cart";
import Carousel from "../../ImageCarousel/Carousel";
import styles from "./gamecard.module.css";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { motion } from "framer-motion";

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
  border-radius: 5px;
`;

const Scart = styled.button`
  background-color: #3c3c3c;
  border: none;
  display: flex;
  align-items: center;
  color: lightgrey;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: #ff00ff;
  }
`;

const GameCard: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const [wishlist, setWishList] = useState(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);

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
    console.log(o);
    e.preventDefault();
    setIsAdded(true);
    setInterval(() => {
      setIsAdded(false);
    }, 3000);
  }

  console.log(data);
  return (
    <div className={styles.card}>
      <a href={`/store/${data.id}`} className={styles.image}>
        <div className={data.id}>
          <ScoverImg cover={data.cover}></ScoverImg>
          <article className={styles.card__top}>
            <Scart onClick={addToCart}>
              {isAdded ? (
                <span
                  style={{
                    color: "limegreen",
                  }}
                >
                  Addded <TiTick color="limegreen" />
                </span>
              ) : (
                <span>
                  {" "}
                  Add to cart <AiOutlinePlus />
                </span>
              )}
            </Scart>
            <p className={styles.price}>£{data.price}</p>
          </article>
          <p className={styles.card__title}>{data.title}</p>
          <article className={styles.card__bottom}>
            <button onClick={wishlistChange} className={styles.wishlist}>
              <AiFillHeart
                color={wishlist == false ? "white" : "red"}
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
