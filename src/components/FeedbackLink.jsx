import { Link, Outlet , useParams } from "react-router-dom";
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

function FeedbackLink() {
    const {feedbackData} = useContext(FeedbackContext);
    const params = useParams()
    const item = feedbackData.find(item => (item.id === parseInt(params.feedbackId)))
    return (
        <>
            <div className="card">
                <p>ID: {item.id}</p>
                <p>Rating: {item.rating}</p>
                <p>Review: {item.text}</p>
                <Link to="review">Review</Link>
                <Link to="/">Back to home</Link>
            </div>
            <Outlet />
        </>
    )
}

export default FeedbackLink;