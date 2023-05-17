import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeCart, selectCart } from "../../redux/cart";
import { useEffect, useState } from "react";
import CartItem from "../common/cartItem/CartItem";
import styles from "./cartSidebar.module.css";
import { selectSidebar, closeSideBar } from "../../redux/cartSidebar";

export default function CartSidebar() {
  const dispatch = useDispatch();
  const Cart = useSelector(selectCart);
  const cartModal = useSelector(selectSidebar);
  function clear() {
    dispatch(clearCart({}));
  }

  // console.log(cartModal);

  function SumGames() {
    // total cose of all games in cart
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

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      console.log(cartModal);
      if (cartModal && !event.target.closest("." + styles.cart)) {
        console.log(event.target.classList.value);
        if (!event.target.classList.contains("Cart")) {
          // Clicked outside the modal, close it
          console.log("clicked outside");
          dispatch(closeSideBar());
        }
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [cartModal]);

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
