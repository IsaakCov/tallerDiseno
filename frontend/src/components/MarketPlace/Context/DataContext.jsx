import { createContext, useState } from "react";


export const dataContext = createContext();

const DataProvider = ({children})=> {
    const [cart, setCart] = useState([]);


    const buyProducts = (product) => {
        const productrepeat = cart.find((item) => item.idProducto === product.idProducto);
        if(productrepeat){
            setCart(cart.map((item)=>(item.idProducto === product.idProducto ? {...product, Stock: productrepeat.Stock + 1} : item)));
        }else{
            setCart([...cart, product]);
        }
        };
    return(
        <div>
            <dataContext.Provider value ={{ cart, setCart, buyProducts }}>{children}</dataContext.Provider>;
        </div>
        
    )
};

export default DataProvider;