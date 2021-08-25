import React from 'react'
import {AffairPriorityType, AffairType} from './HW2'
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
    checkAffairPriority: (priority: AffairPriorityType) => void
}

const getColorByPriority = (priority: AffairPriorityType) => {
    switch (priority) {
        case 'high':
            return 'green'
            break
        case 'middle':
            return 'blue'
            break
        case 'low' :
            return 'red'
            break
    }
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.affair}>
            <span>{props.affair.name} </span>
            <span style={{color: getColorByPriority(props.affair.priority)}} className={s.affairPriority}>[{props.affair.priority}]</span>
            <button className={s.deleteAffairButton} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
