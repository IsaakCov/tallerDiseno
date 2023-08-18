import React from 'react'
import './user.css'
import Avatar from '../../img/Avatar.png'
import { Link } from "react-router-dom"

const User = () => {
  return (
    <div className="userViewAdmin">
        <div className="userTitleContainer">
          <h2 className="EditUserTitle">Editar Usuario</h2>
          
        </div>
        <div className="userContainerViewAdmin">
          <div className="userShowAdmin">
          <div className="userShowAdminTop">
            <img src={Avatar} alt="Foto Usuario" className='UserShowImg'/>
          <div className="userShowTopTitle">
            <span className="userShowUserName">Pedro Vergara</span>
            <span className="userShowUserTitle">Ingeniero Civil Informático</span>
          </div>
          </div>
          
          <div className="userShowAdminBottom">
            <span className="userShowTitle">Detalles de la cuenta</span>
            <div className="userShowInfo">
            <i class="bi bi-person userShowIcon"></i>
            <span className="userShowInfoTitle">Peverme</span>
            </div>
            <div className="userShowInfo">
            <i class="bi bi-calendar-date userShowIcon"></i>
            <span className="userShowInfoTitle">12.05.1998</span>
            </div>
            <span className="userShowTitle">Contacto</span>
            <div className="userShowInfo">
            <i class="bi bi-telephone userShowIcon"></i>
            <span className="userShowInfoTitle">+524685212</span>
            <div className="userShowInfo">
            <i class="bi bi-envelope-at userShowIcon"></i>
            <span className="userShowInfoTitle">example@correo.cl</span>
            </div>
            <div className="userShowInfo">
            <i class="bi bi-signpost-split userShowIcon"></i>
            <span className="userShowInfoTitle">Calle falsa 123</span>
            
            </div>
            </div>
            
          </div>
          </div>
          
          <div className="userUpdateAdmin">
          <span className="userShowTitle">Editar</span>
          <form action="" className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Nombre de Usuario</label>
                  <input type="text" placeholder="Editar Nombre Usuario" className="userUpdateInput"></input>
                </div>
                <div className="userUpdateItem">
                  <label>Nombre Completo</label>
                  <input type="text" placeholder="Editar Nombre Completo" className="userUpdateInput"></input>
                </div>
                <div className="userUpdateItem">
                  <label>Fecha de Nacimiento</label>
                  <input type="text" placeholder="Editar Fecha de Nacimiento" className="userUpdateInput"></input>
                </div>
                <div className="userUpdateItem">
                  <label>Teléfono</label>
                  <input type="text" placeholder="Editar Teléfono" className="userUpdateInput"></input>
                </div>
                <div className="userUpdateItem">
                  <label>Correo</label>
                  <input type="text" placeholder="Editar Correo" className="userUpdateInput"></input>
                </div>
                <div className="userUpdateItem">
                  <label>Dirección</label>
                  <input type="text" placeholder="Editar Dirección" className="userUpdateInput"></input>
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img src={Avatar} alt="Subida de Foto" className="userUpdateImg" />

                  <label htmlFor="file"></label>
                  <input type="file" id="file"/>
                </div>
                <button className='userUpdateButton'>Cargar</button>
              </div>
            </form>
          </div>
        </div>
        </div>
  )
}

export default User