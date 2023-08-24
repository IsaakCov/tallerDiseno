import React from 'react'
import "./AccountSettings.css"

const AccountSettings = () => {
  
  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Información Personal</h1>
     
      

      <div className='form'>
        <div className='form-group'>
        <i className="logousuario  bi-person-circle"></i>

          
        </div>

        <table className='yourorderstable'>
                <thead>
                    <tr>
                        <th scope='col'>Nombre y Apellido</th>
                        <th scope='col'>Correo</th>
                        <th scope='col'>Celular/Teléfono</th>
                        
                        
                    </tr>
                </thead>
        </table>

        <div>
          <span className='nameuser'>Nombre y Apellido </span>
        </div>

        <div>
          <span className='mailuser'>Correo</span>
        </div>

        <div>
          <span className='phoneuser'>Celular/Teléfono</span>
        </div>

      </div>




          
          

          
        

    </div>

     
    
  )
}

export default AccountSettings