import React from 'react'
import "./AccountSettings.css"
import "./YourOrders.css";

const AccountSettings = () => {
  
  return (
    <div className='accountSettings'>
      <h1 className='mainhead1'>Información Personal</h1>
      
      <div className='form'>
      <i className="userlogo bi-person-circle"></i>
      
      <table className='yourOrdersTable'>
        <thead>
          <tr>
            <th scope='col'>Nombre y Apellido</th>
            <th scope='col'>Correo</th>
            <th scope='col'>Celular/Telefono</th>
                        
          </tr>
        </thead>
      </table>
    </div>  
    </div>

     
    </div>
  )
}


export default AccountSettings