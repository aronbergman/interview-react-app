import React from 'react'
import classes from './FinishInterview.module.scss'

const FinishInterview = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)


    return (
        <div className={classes.FinishInterview}>
            <ul>
                {
                    props.interview.map((question, index) => {
                        return (
                            <li key={index}>
                                <strong>{++index}) </strong>
                                {question.question}
                                <i>
                                    {props.results[question.id] === 'success' ? <p>Верно</p> : <p>Ошибка</p>}
                                </i>
                            </li>
                        )
                    })
                }
            </ul>

            <p>Правильно {successCount} из {props.interview.length}</p>

            <div>
                <button onClick={props.onRetryInterview}>Повторить</button>
            </div>
        </div>
    )
}

export default FinishInterview;