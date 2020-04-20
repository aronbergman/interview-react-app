import React, {Component} from 'react'
import classes from './Interview.module.scss'
import ActiveInterview from "../../components/ActiveInterview/ActiveInterview";
import FinishInterview from "../../components/FinishInterview/FinishInterview";

class Interview extends Component {
    state = {
        results: {}, // {[id]: 'success' 'error'}
        isFinished: false,
        activeQuestion: 1,
        answerState: null, // {[id]: 'success' 'error'}
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

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') return
        }

        const question = this.state.interview[this.state.activeQuestion - 1]
        const results = this.state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({answerState: {[answerId]: 'success'}})

            const timeout = setTimeout(() => {

                if (this.isFinished()) {
                    this.setState({isFinished: true})
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: {[answerId]: null},
                        results
                    })
                }
                clearTimeout(timeout)
            }, 1500)
        } else {
            results[question.id] = 'error'
            this.setState({answerState: {[answerId]: 'error'}, results})
        }
    }

    render() {
        return (
            <div className={classes.Interview}>
                <div className={classes.ActiveInterview}>
                    <h1>Interview</h1>
                    {
                        this.state.isFinished
                            ? <FinishInterview
                                interview={this.state.interview}
                                results={this.state.results}/>
                            : <ActiveInterview
                                state={this.state.answerState}
                                lenght={this.state.interview.length}
                                answerNumber={this.state.activeQuestion}
                                clicked={this.onAnswerClickHandler}
                                question={this.state.interview[this.state.activeQuestion - 1].question}
                                answers={this.state.interview[this.state.activeQuestion - 1].answers}/>
                    }
                </div>
            </div>
        )
    }
}

export default Interview;