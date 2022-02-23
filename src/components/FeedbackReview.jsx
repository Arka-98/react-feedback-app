import { useParams } from "react-router-dom";
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

function FeedbackReview() {
    const {feedbackData} = useContext(FeedbackContext)
    const params = useParams();
    return (
        <div className="card">
            <h2>{feedbackData.find(item => item.id === parseInt(params.feedbackId)).text}</h2>
        </div>
    )
}

export default FeedbackReview;