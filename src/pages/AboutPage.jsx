import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <div className="about">
            <h2>About this app.</h2>
            <p>This is a react app for sending reviews and ratings on certain topics</p>
            <Link to="/">
                Back to home
            </Link>
        </div>
    )
}

export default AboutPage;