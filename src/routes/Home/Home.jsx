import Navbrowser from "../../components/Navbrowser/Navbrowser";
import './Home.css'
import bannerHome from '../../assets/bannerHome.jpeg'

export default function Home() {
    return (
        <div className="container_home">
            <Navbrowser/>
            <div className="container-banner-home">
                <img src={bannerHome} alt="banner de inicio" />
            </div>
        </div>
    )
}