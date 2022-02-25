import { createContext, useEffect, useState } from "react";
import FeedbackData from "../../data/FeedbackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [error, setError] = useState({isTrue: false, errorMsg: ""});
    const [isLoading, setIsLoading] = useState(true);
    const [editFeedbackData, setEditFeedbackData] = useState({item: {}, edit: false});
    const [feedbackData, setFeedbackData] = useState([]);
    useEffect(() => {
        fetchFeedbackData();
    }, [])

    const fetchFeedbackData = async () => {
        try {
            const response = await fetch("/feedback?_sort=id&_order=desc");
            if(!response.ok) {
                throw new Error(response.statusText)
            }
            const data = await response.json();
            setFeedbackData(data);
            setIsLoading(false);
        } catch(err) {
            setError({isTrue: true, errorMsg: err});
        }
    }
    const deleteFeedbackData = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/feedback/${id}`, {method: "DELETE"})
            if(!response.ok) {
                throw new Error(response.statusText)
            }
            fetchFeedbackData();
        } catch(err) {
            setError({isTrue: true, errorMsg: err});
        }
    }
    const insertFeedbackData = async(feedbackItem) => {
        try {
            const response = await fetch("http://localhost:5000/feedback", {
                method: "POST",
                headers: {"Content-type": "Application/json"},
                body: JSON.stringify(feedbackItem)
            });
            if(!response.ok) {
                throw new Error(response.statusText)
            }
            const data = await response.json();
            setFeedbackData([data, ...feedbackData])
        } catch(err) {
            setError({isTrue: true, errorMsg: err});
        }
    }
    const updateFeedbackData = async (feedbackItem) => {
        try {
            const response = await fetch(`http://localhost:5000/feedback/${editFeedbackData.item.id}`, {
                method: "PUT",
                headers: {"Content-type": "Application/json"},
                body: JSON.stringify(feedbackItem)
            });
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            fetchFeedbackData();
        } catch(err) {
            setError({isTrue: true, errorMsg: err});
        }
    }
    // const deleteFeedback = (id) => {
    //     setFeedbackData(feedbackData.filter(item => item.id!==id))
    //     console.log(`Deleted item id ${id}`);
    // }
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
        <FeedbackContext.Provider value={{
                feedbackData,
                editFeedbackData,
                isLoading,
                error,
                insertFeedbackData,
                deleteFeedbackData,
                updateFeedbackData,
                addFeedback,
                getFeedback,
                modifyFeedback
            }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;