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
                    Вопрос
                </span>
                <small>4 из 40</small>
            </p>

            {/*Варианты ответа*/}
            <AnswersList answers={props.answers}/>
        </div>
    )
}

export default ActiveInterview