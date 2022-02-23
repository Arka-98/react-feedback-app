import { type } from '@testing-library/user-event/dist/type';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import PropTypes from 'prop-types'

function Button({children, color, isDisabled, type}) {
    return (
        <button className={color} disabled={isDisabled} type={type}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    color: "",
    isDisabled: false,
    type: "button"
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    isDisabled: PropTypes.bool,
    type: PropTypes.string
}

export default Button;