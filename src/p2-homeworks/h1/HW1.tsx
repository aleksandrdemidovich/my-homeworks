import React, { useState} from 'react'
import Message, {MessagePropsType} from "./Message";


const messageData: MessagePropsType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Sanya',
    message: 'some text some text some text some text some text some ',
    time: new Date().toLocaleTimeString(),
}

function HW1() {

    const [messages, setMessages] = useState<MessagePropsType[]>([])
    const [inputValue, setInputValue] = useState('')

    function sendMessage(){
        setMessages([...messages, {...messageData, message:inputValue, time: new Date().toLocaleTimeString() }])
        setInputValue('')
    }

    function onInputKeyPres(event:React.KeyboardEvent<HTMLInputElement>){
        if(event.code === 'Enter' || event.code === 'NumpadEnter'){
            sendMessage()
        }
    }
    return (
        <div>
            <hr/>
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>
            {messages.map((message, i) => (
                <Message key = {i} avatar={messageData.avatar} name={messageData.name} message={message.message} time={message.time}/>
            ) )}
            <input type='text' placeholder = 'Enter message' value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={onInputKeyPres} autoFocus/>
            <button onClick={sendMessage}>Send</button>
            {/*<AlternativeMessage/>*/}
        </div>
    )
}

export default HW1
