import React from 'react'
import { Link } from 'react-router-dom'

const BotonUsuario = () => {
  return (
    <Link className="nav-link" to="/userhome"><i className="logoperfil bi bi-person-lines-fill"></i></Link>
  )
}

export default BotonUsuario