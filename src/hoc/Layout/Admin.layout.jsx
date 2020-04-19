import React from 'react'
import classes from './Admin.module.scss'

const AdminLayout = ({ children }) => (
    <div className={classes.AdminLayout}>{children}</div>
)

export default AdminLayout