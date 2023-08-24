import React from 'react'
import './sidebar.css'
import { Link } from "react-router-dom"

function SideBar() {
  return (
    <div className="sideBarAdmin">
        <div className="sidebarWrapperAdmin">
          <div className="sidebarMenuAdmin">
            <h3 className="sidebarTitleAdmin">DashBoard</h3>
            <ul className="sidebarListAdmin">
              <li className="sidebarListItemAdmin">
              <Link to ="/AdminDashboard/Users">
              <i className="bi bi-person"></i>
              Usuarios
              </Link>
              </li>
              
              <li className="sidebarListItemAdmin">
              <Link to="/AdminDashBoard/Products">
              <i className="bi bi-shop"></i>
              Productos
              </Link>
              </li>
              <li className="sidebarListItemAdmin">
              <Link to="/AdminDashBoard/Orders">
              <i className="bi bi-box-seam"></i>
              Pedidos
              </Link>
              </li>
            </ul>
          </div>
          
          </div>
        </div>
  )
}

export default SideBar