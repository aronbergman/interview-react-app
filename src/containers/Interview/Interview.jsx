import React, {Component} from 'react'
import classes from './Interview.module.scss'
import ActiveInterview from "../../components/ActiveInterview/ActiveInterview";

class Interview extends Component {
    state = {
        quiz: []
    }

    render() {
        return (
            <div className={classes.Interview}>
                <div className={classes.ActiveInterview}>
                    <h1>Interview</h1>
                    <ActiveInterview/>
                </div>
            </div>
        )
    }
}

export default Interview;