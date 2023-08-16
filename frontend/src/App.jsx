import "./App.css";
import Compromiso from "./components/Compromiso";
import Encabezado from "./components/Encabezado";
import Navbar from "./components/Navbar";
import Servicios from "./components/Servicios";
import Galeria from "./components/Galeria";
import Mapa from "./components/Mapa";
import Testimonios from "./components/Testimonios";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import SocialMediaButtons from "./components/socialmediabuttons/SocialMediaButtons";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div>
      <Navbar />
      <Encabezado />
      <Compromiso />
      <Servicios />
      <Galeria />
      <Testimonios />
      <Mapa />
      <Timeline />
      <Formulario />
      <SocialMediaButtons />
      <Footer />
    </div>
  );
}

export default App;
