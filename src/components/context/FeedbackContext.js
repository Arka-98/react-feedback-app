import { createContext, useState } from "react";
import FeedbackData from "../../data/FeedbackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [editFeedbackData, setEditFeedbackData] = useState({item: {}, edit: false});
    const [feedbackData, setFeedbackData] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        setFeedbackData(feedbackData.filter(item => item.id!==id))
        console.log(`Deleted item id ${id}`);
    }
    const addFeedback = (feedbackObj) => {
        feedbackObj.id = feedbackData.length+1;
        setFeedbackData([feedbackObj, ...feedbackData]);
    }
    const getFeedback = (item) => {
        console.log("called by item - ");
        setEditFeedbackData({item, edit: true});
    }
    const modifyFeedback = (updatedItem) => {
        setFeedbackData(prevFeedbackData => (
            prevFeedbackData.map(item => item.id === editFeedbackData.item.id ? {...item, ...updatedItem}: item)
        ))
        setEditFeedbackData({item: {}, edit: false})
    }
    return (
        <FeedbackContext.Provider value={{feedbackData, editFeedbackData, deleteFeedback, addFeedback, getFeedback, modifyFeedback}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;