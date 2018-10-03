import React from 'react'

const MessageBoard = function(props) {
    const {imageUrl, username, date, text} = props
    return (
        <div style={{
            display: "flex",
            justifyContent: "flex-start",
            border: "1px solid grey",
            width: "100%"
        }} >
            <div className="image-container col-sm-1">
                <img src={imageUrl} alt={username} height="50px" wdth="40px"/>
            </div>    
            <div>
                <a href="#">{username}</a><span>{date}</span>
                <p>{text}</p>
            </div>    
        </div>
    )
}

export default MessageBoard