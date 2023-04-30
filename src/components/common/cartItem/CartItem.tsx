import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../../redux/cart";
interface Props {
  data: any;
}

const CartItem: React.FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  function removeItem(e: any) {
    console.log("id from cratitem " + e.target.id);
    dispatch(removeCart(e.target.id));
  }

  return (
    <div>
      <p>{data.title} </p>
      <p>{data.quantity}</p>
      <p>{data.price}</p>
      <button id={data.id} onClick={removeItem}>
        bin
      </button>
    </div>
  );
};

export default CartItem;
