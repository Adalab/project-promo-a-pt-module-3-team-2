import { Link } from "react-router-dom";
import "../../scss/LandingPage.scss"

function LandingPage() {
    return (
        <div className="landing__header">
            <h1 className="landing__title">Bienvenido a Proyectos Molones</h1>
            <p className="landing__subtitle">Welcome to Proyectos Molones!</p>
            <Link className="button--link" to="/form">
                Publicar proyecto{" "}
            </Link>
        </div>
    )
}

export default LandingPage;