import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartTotal = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, el) => acc + el.Precio * el.Stock, 0);
  return <p className="fs-6">Total a pagar: ${total} </p>;
};

export default CartTotal;
