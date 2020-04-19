import React from 'react'
import classes from './AnswersList.module.scss'

const AnswersList = props => {
    return (
        <ul className={classes.AnswersList}>
            {props.answers.map((answer, index) => {
                return <li
                    className={classes.Answer}
                    key={index}>{answer.title}</li>
            })}
        </ul>
    )
}

export default AnswersList