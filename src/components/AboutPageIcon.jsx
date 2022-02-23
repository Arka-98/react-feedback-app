import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutPageIcon() {
    return (
        <Link to="/about">
            <FaQuestion className="about-link" />
        </Link>
    )
}

export default AboutPageIcon;