import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeCart, selectCart } from "../../redux/cart";
import CartItem from "../common/cartItem/CartItem";
import styles from "./cartSidebar.module.css";
export default function CartSidebar() {
  const dispatch = useDispatch();
  const Cart = useSelector(selectCart);
  function clear() {
    dispatch(clearCart({}));
  }

  // console.log(useSelector(selectCart));

  function SumGames() {
    let total = 0;
    for (let i = 0; i < Cart.length; i++) {
      // if quanity over 1, get quantity and multiply by amount and add to total
      if (Cart[i].quantity > 1) {
        total += Number(Cart[i].quantity * Cart[i].price);
      } else {
        total += Number(Cart[i].price);
      }
    }

    return total.toFixed(2);
  }
  // console.log(SumGames());

  return (
    <main className={styles.cart}>
      <h2>{Cart.length} games</h2>
      <button onClick={clear}>Clear</button>
      <article>
        {Cart.map((data: any) => {
          return <CartItem data={data} />;
        })}
      </article>
      <article>
        <p>Total: £ {SumGames()}</p>
        <button>Checkout *arrowimage</button>
      </article>
    </main>
  );
}
