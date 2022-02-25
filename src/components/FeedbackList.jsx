import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from "./FeedbackItem";
import Spinner from './shared/Spinner';

function FeedbackList() {
    const {feedbackData, isLoading, error} = useContext(FeedbackContext);

    if (error.isTrue) {
        return <div className="message">Error!</div>
    } else if (!isLoading && (feedbackData.length === 0)) {
        return <div className="message">No items found!</div>
    }
    
    return isLoading ? (
        <div className="spinner">
            <Spinner />
        </div>
    ): (
        <div className="feedback-list">
            <AnimatePresence>
                {feedbackData.map(item => (
                    <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                        <FeedbackItem key={item.id} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

// FeedbackList.propTypes = {
//     feedbackList: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             rating: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired
//         })
//     )
// }

export default FeedbackList;