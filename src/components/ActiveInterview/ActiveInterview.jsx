import React from 'react'
import classes from './ActiveInterview.module.scss'
import AnswersList from "./AnswersList/AnswersList";

const ActiveInterview = props => {
    return (
        <div className={classes.ActiveInterview}>

            {/*Вопрос*/}
            <p className={classes.Question}>
                <span>
                <strong>1. </strong>
                    {props.question}
                </span>
                <small>{props.answerNumber} из {props.lenght}</small>
            </p>

            {/*Варианты ответа*/}
            <AnswersList
                state={props.state}
                clicked={props.clicked}
                answers={props.answers}/>
        </div>
    )
}

export default ActiveInterview