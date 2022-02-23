import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function Header(props) {
    const headerStyle = {backgroundColor: props.bgColor, color: props.txtColor}
    return (
        <div className="header" style={headerStyle}>
            <Link to="/" style={{textDecoration: "none"}}>
                <h2 style={{color: props.txtColor}}>{props.title}</h2>
            </Link>
        </div>
    );
}

Header.defaultProps = {
    title: "Feedback UI",
    txtColor: "pink",
    bgColor: 'rgb(0,0,0,0.5)'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;