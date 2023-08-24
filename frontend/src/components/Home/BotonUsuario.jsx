import React from 'react'
import { Link } from 'react-router-dom'
import "../componentsCSS/botones.css"

const BotonUsuario = () => {
  return (
    <Link className="nav-link" to="/userhome"><i class="logoperfil bi bi-person-check"></i></Link>
  )
}

export default BotonUsuario