import React from 'react'
import './sidebar.css'

function SideBar() {
  return (
    <div className="sideBar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">DashBoard</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem active">
              <i className="bi bi-person"></i>
              Usuarios
              </li>
              <li className="sidebarListItem">
              <i className="bi bi-shop"></i>
              Productos
              </li>
              <li className="sidebarListItem">
              <i className="bi bi-box-seam"></i>
              Pedidos
              </li>
            </ul>
          </div>
          
          </div>
        </div>
  )
}

export default SideBar