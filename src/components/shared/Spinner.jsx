import spinner from "../assets/spinner.gif"

function Spinner() {
    return (
        <img src={spinner} alt="Loading..." style={{display: "block", width: "80px", height: "80px", margin: "auto"}} />
    )
}

export default Spinner;