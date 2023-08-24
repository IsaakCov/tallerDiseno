import React from 'react'
import { Link } from 'react-router-dom'
import "../componentsCSS/botones.css"

const BotonAdmin = () => {
  return (
    <div> className="botonbtn"
    <Link className="nav-link" to="/AdminDashboard/Users"><i className="botonNavegador bi bi-star-fill"></i></Link>
    </div>
  )
}

export default BotonAdmin