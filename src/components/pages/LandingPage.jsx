import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div>
            <h1>Landing Page</h1>
            <p>Welcome to Proyectos Molones!</p>
            <Link className="button--link" to="/form">
                Publicar proyecto{" "}
            </Link>
        </div>
    )
}

export default LandingPage;