import React from 'react'
import { Link } from 'react-router-dom'
import "../componentsCSS/botones.css"

const BotonAdmin = () => {
  return (
    <Link className="nav-link" to="/AdminDashboard/Users"><i className="botonNavegador bi bi-star"></i></Link>
  )
}

export default BotonAdmin