// import React from 'react'

const Mapa = () => {
  return (
    <section id= "mapa">
      <div className="container">

        <div className="mapouter w-100 rounded mt-5">
          <h2 className="align-item-center">Donde Encontrarnos</h2>
          {/* frameborder="0" scrolling="no" marginheight="0" marginwidth="0" */}
          <div className="gmap_canvas w-100"><iframe width="820" height="560" id="gmap_canvas" src="https://maps.google.com/maps?q=las+turquesas+934+talagante&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" ></iframe>
            <a href="https://online-timer.me/"></a><br/>
            <a href="https://timenowin.net/"></a>
            <a href="https://www.embedmaps.co">google maps api</a>
            <link rel="stylesheet" type="text/css" href="style.css"/>
          </div>
        </div>
    </div>
  </section>
  )
}

export default Mapa