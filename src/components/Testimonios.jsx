// import React from 'react'
import './componentsCSS/CompromisoySer.css'
import './componentsCSS/botones.css'
import './componentsCSS/hero-section.css'
import './componentsCSS/servicios.css'
import './componentsCSS/style.css'
import './componentsCSS/timeline.css'
const Testimonios = () => {
  return (
    <section>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-10 col-xl-8 text-center">
          <h2 className="mb-4">Testimonios</h2>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
            numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
            quisquam eum porro a pariatur veniam.
          </p>
        </div>
      </div>
    
      <div className="row text-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(22).webp"
              className="rounded-circle shadow-1-strong" width="100" height="100" />
          </div>
          <p className="lead my-3 text-muted">
            Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut
            perspiciatis unde omnis.
          </p>
          <p className="font-italic font-weight-normal mb-0">- Anna Morian</p>
        </div>
        <div className="col-md-6 mb-0">
          <div className="d-flex justify-content-center mb-4">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
              className="rounded-circle shadow-1-strong" width="100" height="100" />
          </div>
          <p className="lead my-3 text-muted">
            Neque cupiditate assumenda in maiores repudiandae mollitia architecto elit sed
            adipiscing elit.
          </p>
          <p className="font-italic font-weight-normal mb-0">- Teresa May</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonios