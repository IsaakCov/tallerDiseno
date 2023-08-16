import React from 'react'
import './sidebar.css'

function SideBar() {
  return (
    <div className="sideBarAdmin">
        <div className="sidebarWrapperAdmin">
          <div className="sidebarMenuAdmin">
            <h3 className="sidebarTitleAdmin">DashBoard</h3>
            <ul className="sidebarListAdmin">
              <li className="sidebarListItemAdmin active">
              <i className="bi bi-person"></i>
              Usuarios
              </li>
              <li className="sidebarListItemAdmin">
              <i className="bi bi-shop"></i>
              Productos
              </li>
              <li className="sidebarListItemAdmin">
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