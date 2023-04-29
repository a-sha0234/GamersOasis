import * as React from "react";
interface Props {
  data: any;
}

const CartItem: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <p>hello </p>
      <p>{data.quantity}</p>
      <p>{data.price}</p>
      <button>bin</button>
    </div>
  );
};

export default CartItem;
