import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../../redux/cart";
import styles from "../cartItem/cartItem.module.css";
import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";

interface Props {
  data: any;
}

const Stitle = styled.p`
  font-weight: bold;
  color: #f5f5dc;
  font-size: 1.2rem;
`;

const Sbutton = styled.button`
  cursor: pointer;
  background-color: #1e1e1e;
  border: none;
  border-radius: 10px;
  padding: 1px;
`;

const Squantity = styled.p`
  margin-top: 5%;
  color: #edeade;
`;

const Sprice = styled.p`
  position: relative;
  margin-left: 10px;
  color: #edeade;

  @media only screen and (max-width: 1400px) {
    position: relative;
  }
`;

const CartItem: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  function removeItem(e: any) {
    dispatch(removeCart(e.currentTarget.id));
  }

  return (
    <div className={styles.cartItem}>
      <div className={styles.top}>
        <Stitle>{data.title} </Stitle>
        <Sprice>£{data.price}</Sprice>
      </div>
      <div className={styles.right__container}>
        <Sbutton id={data.id} onClick={removeItem}>
          <RxCross1 color="rgba(255, 255, 255, 0.6)" />
        </Sbutton>
        <Squantity>Qty:{data.quantity}</Squantity>
      </div>
    </div>
  );
};

export default CartItem;
