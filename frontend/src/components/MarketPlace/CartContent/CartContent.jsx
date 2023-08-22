/* import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import { Link } from "react-router-dom";

const CartContent = ({ open, onClose }) => {
  const { cart } = useContext(dataContext);

  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modalContainer">
        <p onClick={onClose} className="closeBtn">
          <a href="#" class="pe-auto">
            ✖️
          </a>
        </p>
        {cart.length > 0 ? (
          <>
            <CartElements />
          </>
        ) : (
          <h2 className="cart-message-center">Tu carrito está vacío</h2>
        )}
      </div>
    </div>
  );
};

export default CartContent;
 */
