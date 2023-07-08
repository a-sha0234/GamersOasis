import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeCart, selectCart } from "../../redux/cart";
import { useEffect, useState } from "react";
import CartItem from "../common/cartItem/CartItem";
import styles from "./cartSidebar.module.css";
import { selectSidebar, closeSideBar } from "../../redux/cartSidebar";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

const SContainer1 = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Scontainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3%;
`;

const ScartContainser = styled.div`
  display: flex;
  justify-content: center;
`;

const Sgames = styled.h2`
  color: white;
  font-weight: bold;
`;

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
      <Scontainer2>
        <Sgames>{Cart.length} games</Sgames>
        <button onClick={clear} className={styles.clear}>
          Clear
        </button>
      </Scontainer2>
      <article className={styles.games}>
        {Cart.map((data: any) => {
          return (
            <ScartContainser>
              <CartItem data={data} />
            </ScartContainser>
          );
        })}
      </article>
      <SContainer1>
        <article className={styles.sidebar__bottom}>
          <p className={styles.total}>Total: £ {SumGames()}</p>
          <button className={styles.sidebar__checkout}>
            Checkout <BsArrowRight />
          </button>
        </article>
      </SContainer1>
    </main>
  );
}
