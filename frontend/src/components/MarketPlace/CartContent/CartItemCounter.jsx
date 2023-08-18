import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartItemCounter = ({product}) => {
    const { cart, setCart, buyProducts } = useContext(dataContext);

    const decrese =()=>{
        const productrepeat = cart.find((item) => item.idProducto === product.idProducto);

        productrepeat.Stock !== 1 &&
        setCart(cart.map((item)=>(item.idProducto === product.idProducto ? {...product, Stock: productrepeat.Stock - 1} : item)));
    };
  return (
    <>
    <p className='counter-button'onClick={()=>decrese(product)}>➖</p>
    <p>{product.Stock}</p>
    <p className='counter-button'onClick={()=>buyProducts(product)}>➕</p>
    </>
  );
}

export default CartItemCounter