import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeCart, selectCart } from "../../redux/cart";

export default function CartSidebar() {
  return (
    <div>
      <h2>number of items..</h2>
      <button>Clear</button>

      <article>
        <p>Total: ..</p>
        <button>Checkout</button>
      </article>
    </div>
  );
}

// need to create a cartitem component to loop over
