import React from 'react'
import classes from './AnswersList.module.scss'
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => {
    return (
        <ul className={classes.AnswersList}>
            {props.answers.map((answer, index) => {
                return <AnswerItem
                    state={props.state ? props.state[answer.id] : null }
                    key={index}
                    clicked={props.clicked}
                    answer={answer}
                />
            })}
        </ul>
    )
}

export default AnswersList