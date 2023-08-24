import { useNavigate } from 'react-router-dom';
import "../componentsCSS/botones.css"

function BotonLogOut() {
  const history = useNavigate();

  const cerrarSesion = () => {
    // Limpiar todo el contenido del localStorage
    localStorage.clear();
    alert("Cerró su sesión con éxito")

    // Redirigir al usuario a la ruta '/'
    history('/');
    window.location.reload();
  }

  return (


    <div className='botonbtn'>
      <i className="botonNavegador bi bi-box-arrow-right" onClick={cerrarSesion}></i>
    </div>



  )
}


export default BotonLogOut;