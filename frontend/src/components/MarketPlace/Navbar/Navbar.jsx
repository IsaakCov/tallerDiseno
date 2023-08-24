import { useContext, useState } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import TotalItems from "../CartContent/TotalItems";
import "./Navbar.css";
import CartElements from "../CartContent/CartElements";

const Navbar = () => {
  const { cart } = useContext(dataContext);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="barra-market ">
      <nav className="navbar-market">
        <Link to={"/"}>
          <h1 className="navbar-logo">Taller Diseño</h1>
        </Link>
      </nav>

      <div className="nav-container-market">
        <button
          class="modalBtn-market btn btn-outline-dark"
          type="submit"
          onClick={() => setOpenModal(true)}
        >
          <i class="bi-cart-fill me-1"></i>

          <span class="badge bg-dark text-white ms-1 rounded-pill">
            {cart.length > 0 ? <TotalItems /> : null}
          </span>
        </button>
        <CartElements open={openModal} onClose={() => setOpenModal(false)} />
        <button>AQUI IRÁ EL BOTON PARA ADMINISTRADOR</button>
        <button>AQUI IRÁ EL BOTON PARA USUARIO NORMAL</button>
      </div>
    </div>
  );
};

export default Navbar;
