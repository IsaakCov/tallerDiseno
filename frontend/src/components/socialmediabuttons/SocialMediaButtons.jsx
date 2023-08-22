import React from "react";
import "../componentsCSS/botones.css";

function SocialMediaButtons() {
  return (
    <div className="icon-bar" id="icon-links">
      <a className="email" href="mailto:tallerdiseno.1978@gmail.com">
        <i className="fa fa-envelope" aria-hidden="true"></i>
      </a>
      <a href="https://wa.me/c/56930268586" className="whatsapp">
        <i className="fa fa-whatsapp" aria-hidden="true"></i>
      </a>
      <a
        href="https://www.instagram.com/taller_design_chile/"
        target="_blank"
        className="instagram"
      >
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </a>
    </div>
  );
}

export default SocialMediaButtons;
