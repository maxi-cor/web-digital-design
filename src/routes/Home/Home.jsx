import Navbrowser from "../../components/Navbrowser/Navbrowser";
import './Home.css'
import bannerHome from '../../assets/bannerHome.jpeg';
import seoPic from '../../assets/seoPic.png';

export default function Home() {
    return (
        <div className="container_home">
            <Navbrowser/>
            <div className="container-banner-home">
                <img src={bannerHome} alt="banner de inicio" />
                <div className="container-text-inside-bannerContainer">
                    <h1>Transforma tu visión en realidad digital.</h1>
                    <p>Convertimos ideas en experiencias digitales impactantes. Te ayudaremos a destacarte en línea y alcanzar tus objetivos.</p>
                    <p>Descubre cómo podemos ayudarte a llevar tu presencia en línea al siguiente nivel.</p>
                </div>
            </div>
            <div className="container-introduccion-CEO">
                <h1>En un mundo cada vez más digitalizado, tu presencia en línea es tu carta de presentación.</h1>
                <p>En Worl Digital Design, entendemos la importancia de destacar entre la multitud. Nuestro equipo de expertos en desarrollo web está aquí para convertir tu visión en una realidad digital impactante, mientras nos enfocamos en optimizar tu sitio para alcanzar los primeros puestos en los motores de búsqueda.</p>
            </div>
            <div className="container-box-seoRecomendation">
                <img src={seoPic} alt="searching engine" />
                <div className="container-text-inside-seoRecomendation">
                    <h4>Optimización de Motores de Búsqueda (SEO):</h4>
                    <ul>
                        <li>Mejora de la visibilidad de tu sitio web en los resultados de búsqueda orgánica.</li>
                        <li>Investigación de palabras clave, optimización de metaetiquetas y mejora de la estructura del sitio para aumentar el tráfico y la clasificación en los motores de búsqueda.</li>
                    </ul>

                    <h4>Manejo de Redes Sociales:</h4>
                    <ul>
                        <li>Gestión completa de tus perfiles en redes sociales, incluyendo publicación regular de contenido, interacción con seguidores y gestión de campañas publicitarias.</li>
                        <li>Desarrollo de estrategias para aumentar la comunidad en línea y promover la participación del público.</li>
                    </ul>

                    <h4>Informe de Métricas en Google Analytics:</h4>
                    <ul>
                        <li>Análisis detallado del tráfico del sitio web, el comportamiento del usuario y otras métricas clave utilizando Google Analytics.</li>
                        <li>Generación de informes personalizados que proporcionan información valiosa para tomar decisiones estratégicas y mejorar el rendimiento en línea.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}