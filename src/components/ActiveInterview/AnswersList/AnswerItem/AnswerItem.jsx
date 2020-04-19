import React from 'react'
import classes from "../AnswersList.module.scss";

const ActiveInterview = props => {
    const cls = [classes.Answer]

    if (props.state) {
        cls.push(classes[props.state])
    }

    return (
        <li
            onClick={() => props.clicked(props.answer.id)}
            className={cls.join(' ')}
        >{props.answer.title}</li>
    )
}

export default ActiveInterview