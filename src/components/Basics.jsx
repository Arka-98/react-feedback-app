import PropTypes from "prop-types"

function Basics({title, body}) {
    const rand = Math.ceil(Math.random() * 10);
    const comments = [
        {id: 1, text: "This is comment One"},
        {id: 2, text: "This is comment Two"},
        {id: 3, text: `This is comment ${rand>6 ? rand: "Loading"}`}
    ];
    return (
        <div className="container">
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            <div className="comments">
                <h3>Comments: {comments.length}</h3>
                <ul>
                    {comments.map((comment) => <li key={comment.id}>{comment.id+". "+comment.text}</li>)}
                </ul>
            </div>
        </div>
    );
}

Basics.defaultProps = {
    title: "Blog",
    body: "This is blog body"
}

Basics.propTypes = {
    title: PropTypes.string.isRequired
}

export default Basics;