import Navbrowser from "../../components/Navbrowser/Navbrowser";
import './Home.css'
import seoPic from '../../assets/seoPic.jpeg';
import woman from '../../assets/woman.png';
import responsivo from '../../assets/responsive2.png'

export default function Home() {
    return (
        <div className="container_home">
            <Navbrowser />
            <div className="container-banner-home">
                
                <div className="container-text-inside-bannerContainer">
                    <h1>Transforma tu visión en realidad digital.</h1>
                    <p>Convertimos ideas en experiencias digitales impactantes. Te ayudaremos a destacarte en línea y alcanzar tus objetivos.</p>
                    <p>Descubre cómo podemos ayudarte a llevar tu presencia en línea al siguiente nivel.</p>
                </div>
            </div>

            <div className="container-introduccion-CEO">
                <h2>En un mundo cada vez más digitalizado, tu presencia en línea es tu carta de presentación.</h2>
                <p>En Worl Digital Design, entendemos la importancia de destacar entre la multitud. Nuestro equipo de expertos en desarrollo web está aquí para convertir tu visión en una realidad digital impactante, mientras nos enfocamos en optimizar tu sitio para alcanzar los primeros puestos en los motores de búsqueda.</p>
            </div>

            <div className="container-box-seoRecomendation">
                <img src={seoPic}  alt=""/>
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

            <div className="container-introduccion-responsive">
                <div className="responsive-firstBlock respoBlock">
                    <h3>Porque nos adaptamos a los diferentes estilos de nuestros clientes.</h3>
                    <p>Y sabemos la importancia que esto representa en tu marca.</p>
                </div>
                <img src={woman} alt=""/> 
                <div className="responsive-secondBlock respoBlock">
                    <h3>Creamos diseños que reflejan la identidad única de tu empresa.</h3>
                    <p>Para conectar con tu audiencia, y convertir esa visita en un cliente.</p>
                </div>
            </div>

            <div className="container-box-designRecomendation">
                <img src={responsivo} alt="searching engine" />
                <div className="container-text-inside-designRecomendation">
                    <h4>UX/UI and Responsive design:</h4>
                    <ul>
                        <li>Nuestro equipo creativo fusiona la estética y la funcionalidad para ofrecer soluciones visuales innovadoras y atractivas.</li>
                        <li>Utilizamos principios de diseño centrados en el usuario para crear interfaces fluidas y eficientes que cumplen con tus objetivos comerciales.</li>
                    </ul>

                    <h4>Maquetado en 3D:</h4>
                    <ul>
                        <li>Convertimos tus ideas en imágenes realistas y detalladas, dando vida a tus proyectos de manera virtual.</li>
                        <li>Creamos representaciones tridimensionales precisas de productos, espacios o conceptos, permitiéndote visualizarlos de forma impactante.</li>
                    </ul>

                    <h4>Tecnolgias:</h4>
                    <ul>
                        <li>Interactúamos con las últimas tecnologías, desde IA para generar visualmente el mejor producto hasta la adopción de nuevas tecnologías para mejorar el rendimiento.</li>
                        <li>Incorporamos soluciones tecnológicas innovadoras que impulsan la eficiencia y la efectividad de nuestros sitios, manteniéndonos a la vanguardia en el panorama digital.</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}