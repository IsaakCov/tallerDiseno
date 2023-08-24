import { useNavigate } from 'react-router-dom';

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


    <div className='d-flex justify-content-center align-items-center border border-primary rounded px-4'>
      <i className="bi bi-box-arrow-right" onClick={cerrarSesion}></i>
    </div>



  )
}


export default BotonLogOut;