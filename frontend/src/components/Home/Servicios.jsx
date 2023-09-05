// import React from 'react'
import '../componentsCSS/servicios.css'
import sillacafe from '../img/sillacafe.png'
import sillonblanco from '../img/sillonblanco.png'
import sillonrojo from '../img/sillonrojo.png'
const Servicios = () => {
  return (
    <section id="servicios">
      <h2 className="text-center m-5">Nuestros Servicios</h2>
      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-md-6 col-lg-4 col-container">
            <div className="card">
              <img
                src={sillacafe}
                alt="Mueble restaurado"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-tittle">Limpieza</h3>
                <p className="card-sub-title">
                  Recupera luminosidad
                </p>
                <p className="card-info">
                  Cuando te enfrentas a manchas en tus sillas o sillones, el servicio de limpieza se erige como la opción más sensata y eficiente para devolverles su esplendor original y garantizar su mantenimiento a largo plazo.
                </p>
                {/* <button className="card-btn" >Cotizar</button> */}
              </div>
            </div>
          </div>


          <div className="col-12 col-md-6 col-lg-4 col-container">
            <div className="card">
              <img
                src={sillonblanco}
                alt="Mueble restaurado"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-tittle">Restauración</h3>
                <p className="card-sub-title">
                  Renueva la Elegancia
                </p>
                <p className="card-info">
                  Nuestro servicio de restauración está aquí para devolverles su esplendor original. Ya sea para restaurar colores desvanecidos o renovar la belleza de piezas antiguas, nuestro equipo de expertos trabaja con pasión y dedicación para revitalizar tus muebles.
                </p>
                {/* <button className="card-btn" disabled>Cotizar</button> */}
              </div>
            </div>
          </div>

          <div className="col-12 col:justify-content-center  col-md-6 col-lg-4 col-container">
            <div className="card">
              <img
                src={sillonrojo}
                alt="Mueble restaurado"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-tittle">Tapicería</h3>
                <p className="card-sub-title">
                  Transforma tus favoritos
                </p>
                <p className="card-info">
                  Nuestro servicio de tapicería está aquí para revivir y transformar tus piezas favoritas. Con una combinación de habilidad artesanal y materiales de alta calidad, trabajamos con cuidado para devolver a tus muebles tapizados su belleza y comodidad.
                </p>
                {/* <button className="card-btn" disabled>Cotizar</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicios