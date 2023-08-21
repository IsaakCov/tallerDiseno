import Compromiso from './Compromiso'
import Encabezado from './Encabezado'
import Navbar from './Navbar'
import Servicios from './Servicios'
import Galeria from './Galeria'
import Mapa from './Mapa'
import Testimonios from './Testimonios'
import Timeline from './Timeline'
import Footer from './Footer'
import SocialMediaButtons from '../socialmediabuttons/SocialMediaButtons'
import Formulario from './Formulario'

function Index() {

return (

<div>
    <Navbar/>
    <Encabezado/>
    <Compromiso/>
    <Servicios/>
    <Galeria/>
    <Testimonios/>
    <Mapa/>
    <Timeline/>
    <Formulario/>
    <SocialMediaButtons />
    <Footer/>
</div>
)
}

export default Index