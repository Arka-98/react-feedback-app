import { Link } from "react-router-dom";
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

function FeedbackLinks() {
    const {feedbackData} = useContext(FeedbackContext);

    return (
        <div className="card">
            {feedbackData.map( feedbackItem => (
                <Link to={`/feedback/${feedbackItem.id}`} key = {feedbackItem.id}>{feedbackItem.id}</Link>
            ))}
        </div>
    )
}

export default FeedbackLinks;