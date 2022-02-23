import { useEffect, useState } from "react";

function FeedbackRating({ratingData, handleRating}) {
    const [rating, setRating] = useState(ratingData);
    useEffect(()=>{
        setRating(ratingData);
    }, [ratingData])
    function handleInput(event) {
        setRating(event.target.value);
        handleRating(event.target.value);
    }
    return (
        <ul className="rating">
            <li><input type="radio" name="rating" value="1" checked={rating === "1"} id="num1" onChange={handleInput} /><label htmlFor="num1">1</label></li>
            <li><input type="radio" name="rating" value="2" checked={rating === "2"} id="num2" onChange={handleInput}  /><label htmlFor="num2">2</label></li>
            <li><input type="radio" name="rating" value="3" checked={rating === "3"} id="num3" onChange={handleInput} /><label htmlFor="num3">3</label></li>
            <li><input type="radio" name="rating" value="4" checked={rating === "4"} id="num4" onChange={handleInput} /><label htmlFor="num4">4</label></li>
            <li><input type="radio" name="rating" value="5" checked={rating === "5"} id="num5" onChange={handleInput} /><label htmlFor="num5">5</label></li>
            <li><input type="radio" name="rating" value="6" checked={rating === "6"} id="num6" onChange={handleInput} /><label htmlFor="num6">6</label></li>
            <li><input type="radio" name="rating" value="7" checked={rating === "7"} id="num7" onChange={handleInput} /><label htmlFor="num7">7</label></li>
            <li><input type="radio" name="rating" value="8" checked={rating === "8"} id="num8" onChange={handleInput} /><label htmlFor="num8">8</label></li>
            <li><input type="radio" name="rating" value="9" checked={rating === "9"} id="num9" onChange={handleInput} /><label htmlFor="num9">9</label></li>
            <li><input type="radio" name="rating" value="10" checked={rating === "10"} id="num10" onChange={handleInput} /><label htmlFor="num10">10</label></li>
        </ul>
    )
}

export default FeedbackRating;