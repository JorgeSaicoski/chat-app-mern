import React, {useState} from "react";
import io from "socket.io-client";


const SendMessage = (props) => {
    const [message, setMessage] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.socket.emit('message', message)
        setMessage("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={message} onChange={e => setMessage(e.target.value)}/>
            <button type="submit">Send</button>
        </form>
    )
}

export default SendMessage