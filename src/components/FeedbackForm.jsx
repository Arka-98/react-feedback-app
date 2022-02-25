import { useEffect, useState } from "react";
import Button from "./shared/Button";
import FeedbackRating from "./FeedbackRating";
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

function FeedbackForm() {
    const {modifyFeedback, editFeedbackData, insertFeedbackData, updateFeedbackData} = useContext(FeedbackContext)
    const [data, setData] = useState({review: "", message: "", isDisabled: true, rating: "10"});
    useEffect(()=>{
        if(editFeedbackData.edit) {
            setData({review: editFeedbackData.item.text, message: "", isDisabled: false, rating: String(editFeedbackData.item.rating)})
        }
    }, [editFeedbackData])
    console.log(data);
    function handleInput(event) {
        const {name, value} = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
            isDisabled: value.trim().length < 10 ? true : false,
            message:  value.trim().length < 10 ? "Please enter at least 10 characters":""
        }));
    }
    function handleRating(rating) {
        setData(prevData => ({...prevData, rating: rating}))
    }
    function handleFormSubmit(event) {
        event.preventDefault();
        if(editFeedbackData.edit) {
            updateFeedbackData({text: data.review, rating: parseInt(data.rating)});
        } else {
            insertFeedbackData({rating: parseInt(data.rating), text: data.review});
        }
        setData(prevData => ({...prevData, review: "", isDisabled: true, rating: "10"}));
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <h2>How would you like to review this?</h2>
            <FeedbackRating ratingData={data.rating} handleRating={handleRating} />
            <input type="text" name="review" placeholder="Write a review" value={data.review} onChange={handleInput} />
            {data.message && (<div className="error-msg">{data.message}</div>)}
            <Button isDisabled={data.isDisabled} type="submit">Send</Button>
        </form>
    )
}

export default FeedbackForm;