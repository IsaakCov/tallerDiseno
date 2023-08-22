import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Agrega esta línea

export const dataContext = createContext();

const DataProvider = ({ children }) => {
const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
const [cart, setCart] = useState(initialCart);

useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

const buyProducts = (product) => {
    const productRepeat = cart.find((item) => item.idProducto === product.idProducto);
    if (productRepeat) {
    setCart(cart.map((item) => (item.idProducto === product.idProducto ? { ...product, Stock: productRepeat.Stock + 1 } : item)));
    } else {
    setCart([...cart, product]);
    }
};

return <dataContext.Provider value={{ cart, setCart, buyProducts }}>{children}</dataContext.Provider>;
};

DataProvider.propTypes = {
children: PropTypes.node.isRequired, 
};

export default DataProvider;