import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import './login.css';
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

function Login({ open, onClose }) {
  const loginBtnRef = useRef(null);
  const signupBtnRef = useRef(null);
  const formContainerRef = useRef(null);
  const [isActive, setIsActive] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        formContainerRef.current &&
        !formContainerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [formContainerRef, onClose]);

  useEffect(() => {
    if (open) {
      setIsActive(open);
      setIsLogin(true);  // Asegurarse de que el formulario de inicio de sesión esté activo cuando se abre el popup
    } else {
      setIsActive(true); // Restablecer a sus valores iniciales cuando el popup se cierra
      setIsLogin(true);  // Restablecer a sus valores iniciales cuando el popup se cierra
    }
  }, [open]);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsLogin(true);
    setIsActive(true);
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    setIsLogin(false);
    setIsActive(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const response = await axios.post(
          `${backendUrl}/api/v1/usuarios/login`,
          {
            Correo: email,
            Contrasena: password,
          }
        );

        console.log('Acceso con éxito:', response.data);


        // Almacena el token JWT en el almacenamiento local
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('Correo', response.data.Correo);
        localStorage.setItem('userRole', response.data.Role);

        //console.log(dieguito);
        // Recarga la página para aplicar la sesión activa
        window.location.reload();
      } else {
        const response = await axios.post(
          `${backendUrl}/api/v1/usuarios/createUsuario`,
          {
            Correo: email,
            Contrasena: password,
            Nombre: nombre,
            Apellido: apellido,
            Telefono: telefono,
            Role: 'USUARIO',
          }

        );
        window.location.reload();

        console.log('Usuario registrado con éxito:', response.data);
        // Aquí puedes manejar el registro de usuario
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      const modalElement = new bootstrap.Modal(document.getElementById('customModal'), {
        keyboard: false
      });
      modalElement.show();
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  if (!open) return null;

  return (
    <section className="home overlay">
      <div
        onClick={(e) => e.stopPropagation()}
        className={`form_container ${isActive ? '' : 'active'}`}
        ref={formContainerRef}
      >
        <i className="uil uil-times form_close" onClick={onClose}></i>
        <div className={`form ${isLogin ? 'login_form' : 'signup_form'} ${isActive ? 'active' : ''}`}>
          <form onSubmit={handleSubmit}>
            {isLogin ? (
              <h2>Login</h2>
            ) : (
              <h2>Signup</h2>
            )}
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
                //type={showPassword ? "text" : "password"}
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="lcontraseña"
                id="lcontraseña" />
            </div>

            {!isLogin && (
              <div /* className={`form ${isLogin ? 'login_form' : 'signup_form'} ${isActive ? 'active' : ''}`} */>
                <div className="input_box">
                  <input
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
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
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
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
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                  />
                  <i className="uil uil-phone phone"></i>
                </div>
              </div>
            )}
            {/*  <div className="option_field">
               <span className="checkbox">
                <input type="checkbox" id="check" />
                <label htmlFor="check">Recordar Contraseña</label>
              </span> 
              <a href="#" className="forgot_pw">
                Recuperar Contraseña
              </a>
            </div> */}
            <button className="button" type="submit">
              Ingresar
            </button>
            <div className="login_signup">
              {isLogin ? (
                <>
                  ¿No tienes cuenta?{" "}
                  <a href="#" ref={signupBtnRef} onClick={handleSignupClick} id="signup" className='links__form'>
                    Registrarse
                  </a>
                </>
              ) : (
                <>
                  ¿Ya tienes cuenta?{" "}
                  <a href="#" id="login" ref={loginBtnRef} onClick={handleLoginClick} className='links__form'>
                    Ingresar
                  </a>
                </>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="modal fade" id="customModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Error</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              El usuario o la contraseña son incorrectos.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;






