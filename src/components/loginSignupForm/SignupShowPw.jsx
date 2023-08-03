import React, { useState } from "react";




export function ShowHidePw() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input_box">
    <input type={showPassword ? 'text' : 'password'} placeholder="Contraseña" name='lcontraseña' id='lcontraseña' required />
    <i className="uil uil-lock password"></i>
    <i className={`uil ${showPassword ? "uil-eye" : "uil-eye-slash"} pw_hide`}
      onClick={handleTogglePassword}></i>
  </div>
  )
}



export function SignupShowPw() {
    const [mostrarContraseña, setMostrarContraseña] = useState(false);

    const handleTogglePassword = () => {
        setMostrarContraseña(!mostrarContraseña);
    };
  
  return (
    <div className="input_box">
      <input type={mostrarContraseña ? 'text' : 'password'} placeholder="Contraseña" name='rpassword' id='rpassword' required />
      <i className="uil uil-lock password"></i>
      <i className={`uil ${mostrarContraseña ? "uil-eye" : "uil-eye-slash"} pw_hide`}
        onClick={handleTogglePassword}></i>
    </div>
  );
}


export function ConfirmPassword() {
    const [mostrarPw, setMostrarPw] = useState(false);

    const handleTogglePassword = () => {
        setMostrarPw(!mostrarPw);
    };
  return (
    <div className="input_box">
        <input type={mostrarPw ? 'text' : 'password'} placeholder="Confirmar contraseña" name='confirmpassword' id='confirmpassword' required />
        <i className="uil uil-lock password"></i>
        <i className={`uil ${mostrarPw ? "uil-eye" : "uil-eye-slash"} pw_hide`}
        onClick={handleTogglePassword}></i>
    </div>
  )
}

