import React from 'react'
import { Link } from 'react-router-dom'

const BotonAdmin = () => {
  return (
    <Link className="nav-link" to="/AdminDashboard/Users"><i class="bi bi-star-fill"></i></Link> 
  )
}

export default BotonAdmin