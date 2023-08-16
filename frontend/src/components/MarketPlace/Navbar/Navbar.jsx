import { useContext, useState } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom"
import TotalItems from "../CartContent/TotalItems"
import "./Navbar.css"
import CartContent from "../CartContent/CartContent";

const Navbar = () => {
    const { cart } = useContext(dataContext);
    const [openModal, setOpenModal]= useState(false);
return (
    <div className= "barra-market" >
        <nav className="navbar-market">
            <Link to={"/"}>    
                <h1 className="navbar-logo">Taller Diseño</h1>
            </Link>
        </nav>

        <div className="nav-container-market">
        <button className='modalBtn-market' onClick={()=>setOpenModal(true)}>🛒
        {cart.length > 0 ? <TotalItems/> : null}
        </button>
        <CartContent open={openModal} onClose={()=> setOpenModal(false)}/>
        </div>
    </div>
        
        
)
}

export default Navbar