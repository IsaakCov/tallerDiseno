import { useContext} from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";
import "./CartContent.css";

const CartElements = () => {
  const { cart, setCart } = useContext(dataContext);

  const deleteProduct = (idProducto) => {
    const newCart = cart.filter((element) => element.idProducto !== idProducto);
    setCart(newCart);
  };

  return (
    <>
      {cart.map((product) => (
        <div className="cartContent" key={product.idProducto}>
          <img src={product.Imagen} alt="product-card" />
          <h3 className="name">{product.Nombre}</h3>
          <CartItemCounter product={product} />
          <h4 className="price">${product.Precio * product.Stock}</h4>
          <h3 className="cart-delete-button" onClick={() => deleteProduct(product.idProducto)}>❌</h3>
        </div>
      ))}
    </>
  );
};

export default CartElements;