import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../../redux/cart";
import styles from "../cartItem/cartItem.module.css";
import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";

interface Props {
  data: any;
}

const Stitle = styled.p``;

const Sbutton = styled.button`
  cursor: pointer;
`;

const Squantity = styled.p`
  margin-top: 5%;
`;

const Sprice = styled.p`
  position: fixed;
  margin-left: 11%;

  @media only screen and (max-width: 1400px) {
    position: relative;
  }
`;

const CartItem: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  function removeItem(e: any) {
    console.log("id from cratitem " + e.target.id);
    dispatch(removeCart(e.target.id));
  }

  return (
    <div className={styles.cartItem}>
      <Stitle>{data.title} </Stitle>

      <Sprice>£{data.price}</Sprice>
      <div className={styles.right__container}>
        <Sbutton id={data.id} onClick={removeItem}>
          <RxCross1 />
        </Sbutton>
        <Squantity>Qty:{data.quantity}</Squantity>
      </div>
    </div>
  );
};

export default CartItem;
