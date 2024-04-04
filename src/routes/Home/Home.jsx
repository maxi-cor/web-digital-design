import Navbrowser from "../../components/Navbrowser/Navbrowser";
import './Home.css'
import bannerHome from '../../assets/bannerHome.jpeg'

export default function Home() {
    return (
        <div className="container_home">
            <Navbrowser/>
            <div className="container-banner-home">
                <img src={bannerHome} alt="banner de inicio" />
                <div className="container-text-inside-bannerContainer">
                    <h1>Transforma tu visión en realidad digital.</h1>
                    <p>Convertimos ideas en experiencias digitales impactantes. Con nuestro equipo de expertos en desarrollo web, te ayudaremos a destacarte en línea y alcanzar tus objetivos.</p>
                    <p>Descubre cómo podemos ayudarte a llevar tu presencia en línea al siguiente nivel.</p>
                </div>
            </div>
            <div className="container-box-recomendation">

            </div>
        </div>
    )
}