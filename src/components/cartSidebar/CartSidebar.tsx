import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeCart, selectCart } from "../../redux/cart";
import CartItem from "../common/cartItem/CartItem";

export default function CartSidebar() {
  const dispatch = useDispatch();
  const Cart = useSelector(selectCart);
  function clear() {
    dispatch(clearCart({}));
  }

  console.log(useSelector(selectCart));

  return (
    <div>
      <h2>{Cart.length} games</h2>
      <button onClick={clear}>Clear</button>
      <article>
        {Cart.map((data: any) => {
          return <CartItem data={data} />;
        })}
      </article>
      <article>
        <p>Total: ..</p>
        <button>Checkout</button>
      </article>
    </div>
  );
}
