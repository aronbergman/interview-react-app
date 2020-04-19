import React from 'react'
import classes from './Global.module.scss'

const GlobalLayout = ({children}) => (
    <div className={classes.GlobalLayout}>{children}</div>
)

export default GlobalLayout