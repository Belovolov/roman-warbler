import React from 'react'
import Message from './Message'

const MessageBoard = function({messages=[], isLoading}) {
    const messageItems = messages.map(message=><Message key={message.id} {...message}/>)
    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
            }} className="col-sm-8">
                { isLoading
                ? (<p>Loading...</p>)
                : messageItems}
        </div>
    )
}

export default MessageBoard