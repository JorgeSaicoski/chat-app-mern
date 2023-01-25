import React, {useEffect, useState} from "react";
import Message from "./Message/Message";
import SendMessage from "./SendMessage/SendMessage";


const Messages = (props) => {
    const [messages, setMessages]=useState([])
    useEffect(()=>{
        const receiveMessage = (message) =>{
            setMessages([...messages, message])
        }
        props.socket.on('message', receiveMessage)
        return ()=>{
            props.socket.off('message')
        }

    },[])

    return(
        <div>
            {
                messages.map(message=><Message message={message}></Message>)
            }
            <SendMessage socket={props.socket}></SendMessage>
        </div>
    )
}

export default Messages