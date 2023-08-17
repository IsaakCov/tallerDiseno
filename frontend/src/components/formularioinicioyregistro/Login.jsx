/*import React, { useRef, useState, useEffect } from 'react'
import { SignupShowPw, ConfirmPassword, ShowHidePw } from './SignupShowPw.jsx';
import './login.css'

// Ceracion de las variables para el cambio del estado del componente

function Login({open , onClose}) {
  const loginBtnRef = useRef(null);
  const signupBtnRef = useRef(null);
  const formContainerRef = useRef(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formContainerRef.current && !formContainerRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formContainerRef, onClose]);

  useEffect(() => {
    if (open) {
      setIsActive(open);
    }
  }, [open]);


  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsActive(true);
  };


  const handleSignupClick = (e) => {
    e.preventDefault();
    setIsActive(false);
  };



  if  (!open) return null
  return (
   
   /*  <!-- Home --> */
/*<section className="home overlay">
      <div onClick={(e) => e.stopPropagation()} className={`form_container ${isActive ? "" : "active"}`} ref={formContainerRef}>
        <i className="uil uil-times form_close" onClick={onClose}></i>
       {/*  <!-- Login From --> */
/*<div className={`form login_form ${isActive ? "active" : ""}`} >
          <form action="#">
            <h2>Login</h2>
            <div className="input_box">
              <input type="email" placeholder="Email" name='lemail' id='lemail' required />
              <i className="uil uil-envelope-alt email"></i>
            </div>
            <ShowHidePw />
            <div className="option_field">
              <span className="checkbox">
                <input type="checkbox" id="check" />
                <label htmlFor="check">Recordar Contraseña</label>
              </span>
              <a href="#" className="forgot_pw">Recuperar Contraseña</a>
            </div>
            <button className="button">Ingresar</button>
            <div className="login_signup">¿No tienes cuenta? <a href="#" ref={signupBtnRef} onClick={handleSignupClick} id="signup">Registrarse</a></div>
          </form>
        </div>
       {/*  <!-- Signup From --> */
/*<div className="form signup_form ">
          <form action="#">
              <h2>Signup</h2>
              <div className="input_box">
              <input type="text" placeholder="Nombre" name='nombre' id='nombre' required />
              <i className="uil uil-user-circle user"></i>
              </div>
              <div className="input_box">
              <input type="text" placeholder="Apellido" name='apellido' id='apellido' required />
              <i className="uil uil-users-alt user"></i>
              </div>
              <div className="input_box">
              <input type="phone" placeholder="Celular" name='telefono'id='telefono' required />
              <i className="uil uil-phone phone"></i>
              </div>
              <div className="input_box">
              <input type="email" placeholder="Email" name='email' id='email' required />
              <i className="uil uil-envelope-alt email"></i>
              </div>
              <SignupShowPw />
              <ConfirmPassword />
              <button className="button">Ingresar</button>
              <div className="login_signup">¿Ya tienes cuenta? <a href="#" id="login" ref={loginBtnRef} onClick={handleLoginClick}>Ingresar</a></div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login;*/

import React, { useState } from "react";
import axios from "axios";

function Login({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/usuarios/login",
        {
          Correo: email,
          Contrasena: password,
        }
      );

      console.log("Respuesta del backend:", response.data);
      // Aquí puedes manejar la respuesta y realizar acciones según el resultado.
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  if (!open) return null;

  return (
    <section className="home overlay">
      <div onClick={(e) => e.stopPropagation()} className="form_container">
        <div className="form login_form active">
          <form action="#">
            <h2>Login</h2>
            <div className="input_box">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="uil uil-envelope-alt email"></i>
            </div>
            <div className="input_box">
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="uil uil-lock-alt lock"></i>
            </div>
            <div className="option_field">
              <span className="checkbox">
                <input type="checkbox" id="check" />
                <label htmlFor="check">Recordar Contraseña</label>
              </span>
              <a href="#" className="forgot_pw">
                Recuperar Contraseña
              </a>
            </div>
            <button className="button" onClick={handleLoginSubmit}>
              Ingresar
            </button>
            <div className="login_signup">
              ¿No tienes cuenta?{" "}
              <a href="#" id="signup">
                Registrarse
              </a>
            </div>
          </form>
        </div>
        {/*  <!-- Signup From --> */}
        <div className="form signup_form ">
          <form action="#">
            <h2>Signup</h2>
            <div className="input_box">
              <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                id="nombre"
                required
              />
              <i className="uil uil-user-circle user"></i>
            </div>
            <div className="input_box">
              <input
                type="text"
                placeholder="Apellido"
                name="apellido"
                id="apellido"
                required
              />
              <i className="uil uil-users-alt user"></i>
            </div>
            <div className="input_box">
              <input
                type="phone"
                placeholder="Celular"
                name="telefono"
                id="telefono"
                required
              />
              <i className="uil uil-phone phone"></i>
            </div>
            <div className="input_box">
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                required
              />
              <i className="uil uil-envelope-alt email"></i>
            </div>
            <SignupShowPw />
            <ConfirmPassword />
            <button className="button">Ingresar</button>
            <div className="login_signup">
              ¿Ya tienes cuenta?{" "}
              <a
                href="#"
                id="login"
                ref={loginBtnRef}
                onClick={handleLoginClick}
              >
                Ingresar
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
