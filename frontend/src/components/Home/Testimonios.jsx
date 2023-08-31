// import React from 'react'
const Testimonios = () => {
  return (
    <section>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-10 col-xl-8 text-center">
          <h2 className="text-center m-5">Testimonios</h2>
          <h5 className="mb-4 pb-2 mb-md-5 pb-md-0 mx-4">
          Testimonios que resaltan nuestro arte en la restauración y el diseño de muebles
          </h5>
        </div>
      </div>
    
      <div className="row text-center justify-content-center align-items-center">
    <div className="col-md-6 mb-4 mb-md-0">
        <div className="d-flex justify-content-center mb-4">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(22).webp"
                className="rounded-circle shadow-1-strong" width="100" height="100" />
        </div>
        <p className="lead my-3 mx-5 text-muted">
            La colaboración con Michelle se basa en su compromiso ejemplar y en su habilidad para enfrentar desafíos con innovación , gran experiencia y trayectoria. <br></br> En la industria publicitaria, destacan por crear mobiliario distintivo y moderno que cumple con altos estándares.
        </p>
            <div className="rating fs-5 estrellas">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            </div>
        <p className="font-italic font-weight-normal mb-0"> Mara Grinbergs </p>
    </div>
</div>

        {/* Modelo para agregar un segundo testimonio, dividido en 2 colummas */}
        {/* <div className="col-md-6 mb-0">
          <div className="d-flex justify-content-center mb-4">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
              className="rounded-circle shadow-1-strong" width="100" height="100" />
          </div>
          <p className="lead my-3 text-muted">
            Neque cupiditate assumenda in maiores repudiandae mollitia architecto elit sed
            adipiscing elit.
          </p>
          <p className="font-italic font-weight-normal mb-0">- Teresa May</p>
        </div> *
      </div>  */}

    </section>
  )
}

export default Testimonios