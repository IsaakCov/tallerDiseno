// import React from 'react'
import { Link } from 'react-router-dom'
import "../componentsCSS/botones.css"

const BotonUsuario = () => {
  return (
    <Link className="nav-link" to="/userhome"><i classNameName="logoperfil bi bi-person-check fs-4"></i></Link>
  )
}

export default BotonUsuario