import React from 'react'
import classes from './ActiveInterview.module.scss'

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
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    )
}

export default ActiveInterview