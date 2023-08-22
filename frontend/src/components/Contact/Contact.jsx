import React from "react";
import Formulario from "../Home/Formulario";
import Timeline from "../Home/Timeline";
import Mapa from "../Home/Mapa";
import Navbar from "../MarketPlace/Navbar/Navbar";
import Footer from "../Home/Footer";

function Contact() {
  return (
    <section className="out">
      <nav>
        <Navbar />
      </nav>
      <div className="container d-flex flex-column flex-md-row align-items-center">
        <div className="col-12 col-md-6">
          <Formulario />
        </div>

        <div className="col-12 col-md-6">
          <Timeline />
        </div>
      </div>

      <div className="col-12 text-center">
        <div className="col-12 w-100">
          <Mapa />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Contact;
