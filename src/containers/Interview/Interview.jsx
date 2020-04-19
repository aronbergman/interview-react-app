import React, {Component} from 'react'
import classes from './Interview.module.scss'
import ActiveInterview from "../../components/ActiveInterview/ActiveInterview";

class Interview extends Component {
    state = {
        interview: [
            {
                answers: [
                    {title: 'Вопрос 1'},
                    {title: 'Вопрос 2'},
                    {title: 'Вопрос 3'},
                    {title: 'Вопрос 4'}
                ]
            }
        ]
    }

    render() {
        return (
            <div className={classes.Interview}>
                <div className={classes.ActiveInterview}>
                    <h1>Interview</h1>
                    <ActiveInterview answers={this.state.interview[0].answers}/>
                </div>
            </div>
        )
    }
}

export default Interview;