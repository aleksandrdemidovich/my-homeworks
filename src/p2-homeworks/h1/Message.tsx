import React from 'react'
import s from './Message.module.css'

export type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.rootMess}>
            <img src={props.avatar} alt='ava'/>
            <div className={s.messInfo}>
                <div>{props.name}</div>
                <div className={s.messText}>{props.message}</div>
                <div className={s.timeMess}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
