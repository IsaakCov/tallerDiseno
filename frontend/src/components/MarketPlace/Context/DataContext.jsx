import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Agrega esta línea

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    // Al montar el componente, tratamos de cargar el carrito desde el localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    const [cart, setCart] = useState(savedCart || []);

    useEffect(() => {
        // Guardamos el carrito en el localStorage cada vez que cambie
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const buyProducts = (product) => {
        const productrepeat = cart.find((item) => item.idProducto === product.idProducto);
        if (productrepeat) {
            setCart(cart.map((item) => (item.idProducto === product.idProducto ? { ...product, Stock: productrepeat.Stock + 1 } : item)));
        } else {
            setCart([...cart, product]);
        }
    };

    return (
        <div>
            <dataContext.Provider value={{ cart, setCart, buyProducts }}>
                {children}
            </dataContext.Provider>
        </div>
    );
};

export default DataProvider;