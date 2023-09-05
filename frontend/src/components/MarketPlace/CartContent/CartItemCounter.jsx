import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartItemCounter = ({ product }) => {
  const { cart, setCart, buyProducts } = useContext(dataContext);

  const decrese = () => {
    const productrepeat = cart.find(
      (item) => item.idProducto === product.idProducto
    );

    productrepeat.Stock !== 1 &&
      setCart(
        cart.map((item) =>
          item.idProducto === product.idProducto
            ? { ...product, Stock: productrepeat.Stock - 1 }
            : item
        )
      );
  };
  return (
    <>
      <button
        className="counter-button p-2 cursor-pointer border-0 bg-white"
        onClick={() => decrese(product)}
      >
        -
      </button>
      <p className="pt-1 m-1 fs-6">{product.Stock}</p>
      <button
        className="counter-button p-2 border-0 bg-white"
        onClick={() => buyProducts(product)}
      >
        +
      </button>
    </>
  );
};

export default CartItemCounter;
