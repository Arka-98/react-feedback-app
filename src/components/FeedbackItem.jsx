import { BsXLg, BsPencilSquare } from "react-icons/bs"
import { useState } from "react";
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';
import PropTypes from 'prop-types'
import Card from "./shared/Card";

function FeedbackItem({item}) {
    const {deleteFeedbackData, getFeedback} = useContext(FeedbackContext);
    function handleCloseIconClick(event) {
        event.preventDefault();
        deleteFeedbackData(item.id);
    }

    function handleEditIconClick(event) {
        event.preventDefault();
        getFeedback(item);
    }

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
            <div className="icons">
                <a href="#" className="edit-icon" onClick={handleEditIconClick}>
                    <BsPencilSquare />
                </a>
                <a href="#" className="close-icon" onClick={handleCloseIconClick}>
                    <BsXLg/>
                </a>
            </div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem;