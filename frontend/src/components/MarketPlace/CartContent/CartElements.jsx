import { useContext} from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";
import "./CartContent.css";

const CartElements = ({ open, onClose }) => {
  const { cart, setCart } = useContext(dataContext);

const CartElements = () => {
    const {cart, setCart } = useContext(dataContext);
    const deleteProduct = (idProducto) =>{
      const foundId = cart.find((element)=> element.idProducto === idProducto);

    const newCart = cart.filter((element) => {
      return element !== foundId;
    });

    setCart(newCart);
  };

  if (!open) return null;

  return (
    <section className="cart__container">
      <div className="overlay">
        <div className="modalContainer">
          <button onClick={onClose} className="closeBtn border-0 bg-white ">
            ✖️
          </button>
          {cart.length > 0 ? (
            <>
              {cart.map((product) => {
                return (
                  <div
                    className="container__cartContent"
                    key={product.idProducto}
                  >
                    <div className="cartContent__imagen">
                      <img src={product.Imagen} alt="product-card" />
                    </div>

                    <div className="cartContent__nombre p-3">
                      <h3 className="name">{product.Nombre}</h3>
                    </div>

                    <div className="cartContent__counter ">
                      <CartItemCounter product={product} />
                    </div>

                    <div className="cartContent__precio">
                      <h4 className="price">
                        ${product.Precio * product.Stock}
                      </h4>
                    </div>

                    <div className="cartContent__deleteBtn">
                      <h5
                        className="cart-delete-button"
                        onClick={() => deleteProduct(product.idProducto)}
                      >
                        x
                      </h5>
                    </div>
                  </div>
                );
              })}

              <div>
                <div className="cart__pagar d-flex justify-content-between mt-3 ">
                  <CartTotal />
                  <Link to="/order">
                    <button className="btn btn-primary btn-pagar-mkp ">
                      Pagar
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <h2 className="cart-message-center">Tu carrito está vacío</h2>
          )}
        </div>
    )
  })
  
}}

export default CartElements;