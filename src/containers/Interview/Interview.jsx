import React, {Component} from 'react'
import classes from './Interview.module.scss'
import ActiveInterview from "../../components/ActiveInterview/ActiveInterview";

class Interview extends Component {
    state = {
        activeQuestion: 1,
        answerState: null,
        interview: [
            {
                id: 1,
                question: 'Какого цвета небо',
                answers: [
                    {title: 'Черный', id: 1},
                    {title: 'Синий', id: 2},
                    {title: 'Белый', id: 3},
                    {title: 'Красный', id: 4}
                ],
                rightAnswerId: 2
            },
            {
                id: 2,
                question: 'В каком году основан СПб',
                answers: [
                    {title: '1700', id: 1},
                    {title: '1705', id: 2},
                    {title: '1703', id: 3},
                    {title: '1803', id: 4}
                ],
                rightAnswerId: 3
            }
        ]
    }

    isFinished = () => {
        return (this.state.activeQuestion) === this.state.interview.length
    }

    onAnswerClickHandler = answerId => {
        const question = this.state.interview[this.state.activeQuestion - 1]
        if (question.rightAnswerId === answerId) {

            this.setState({answerState: {[answerId]: 'success'}})

            const timeout = setTimeout(() => {

                if (this.isFinished()) {
                    console.log('isFinished!')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: {[answerId]: null}
                    })
                }
                clearTimeout(timeout)
            }, 1500)
        } else {
            this.setState({answerState: {[answerId]: 'error'}})
        }
    }

    render() {
        return (
            <div className={classes.Interview}>
                <div className={classes.ActiveInterview}>
                    <h1>Interview</h1>
                    <ActiveInterview
                        state={this.state.answerState}
                        lenght={this.state.interview.length}
                        answerNumber={this.state.activeQuestion}
                        clicked={this.onAnswerClickHandler}
                        question={this.state.interview[this.state.activeQuestion - 1].question}
                        answers={this.state.interview[this.state.activeQuestion - 1].answers}/>
                </div>
            </div>
        )
    }
}

export default Interview;