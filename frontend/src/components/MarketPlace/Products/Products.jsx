import { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import '../Products/Products.css'
import axios from "axios";

const Products = () => {
    const [data, setData] = useState([]);
    const { buyProducts } = useContext(dataContext);

    useEffect(()=>{
        axios("data.json").then((res)=> setData(res.data));
    }, []);

return data.map((product)=>{
    return( 
    <div id="product-market" className="card container products" key={product.id}>
                    <div className="row align-items-center px-3">
                    <div className="col-md-4">
                        <img src={product.img} alt="img-product-card"/>
                    </div>
                    <div className="col-md-4">
                        <h3>{product.name}</h3>
                        <p>Características</p>
                        <ul>
                            <li><b>Color :</b> {product.color}</li>
                            <li><b>Medidas :</b>{product.medidas}</li>
                        </ul>
                    </div>
                    <div id="areaButton" className="col-md-4">
                        <h4>${product.price}</h4>
                        <button onClick={() => buyProducts(product)}>Comprar</button>
                    </div>
                </div>

    </div>
    )
})
    
}

export default Products