import React from 'react'
import "./AccountSettings.css"

const AccountSettings = () => {
  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Información Personal</h1>

      <i class="userlogo bi-person-circle"></i>

      <div className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Nombre </label>
          <label htmlFor='name'>Nombre </label>
          <input type='text' name='name' id='name' />
        </div>

        <div className='form-group'>
          <label htmlFor='phone'>Celular/Teléfono </label>
          <label htmlFor='phone'>Celular/Teléfono </label>
          <input type='text' name='phone' id='phone'

          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Correo </label>
          <label htmlFor='email'>Correo </label>
          <input type='email' name='email' id='email'

          />
        </div>

      
      </div>

      
    </div>
  )
}


export default AccountSettings