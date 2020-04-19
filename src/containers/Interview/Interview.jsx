import React, {Component} from 'react'
import classes from './Interview.module.scss'
import ActiveInterview from "../../components/ActiveInterview/ActiveInterview";

class Interview extends Component {
    state = {
        interview: [
            {
                question: 'Какого цвета небо',
                answers: [
                    {title: 'Черный', id: 1},
                    {title: 'Синий', id: 2},
                    {title: 'Белый', id: 3},
                    {title: 'Красный', id: 4}
                ],
                rightAnswerId: 2
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        console.log(answerId)
    }

    render() {
        return (
            <div className={classes.Interview}>
                <div className={classes.ActiveInterview}>
                    <h1>Interview</h1>
                    <ActiveInterview
                        clicked={this.onAnswerClickHandler}
                        question={this.state.interview[0].question}
                        answers={this.state.interview[0].answers}/>
                </div>
            </div>
        )
    }
}

export default Interview;