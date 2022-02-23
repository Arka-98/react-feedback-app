import PropTypes from 'prop-types'
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

function FeedbackStats() {
    const {feedbackData} = useContext(FeedbackContext);

    let averageRating = feedbackData.reduce((acc, curItem) => { 
        return acc + curItem.rating/feedbackData.length;
    }, 0).toFixed(1);
    return (
        <div className="stats">
            <div className="items">{feedbackData.length} Reviews</div>
            <div className="avg-rating">Average Rating: {averageRating}</div>
        </div>
    );
}

export default FeedbackStats;