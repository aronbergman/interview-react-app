import React from 'react'
import Link from "next/link";
import GlobalLayout from "./Global.layout";
import classes from './Admin.module.scss'

const AdminLayout = ({children}) => (
    <div>
        <header>
            <Link href="/">Главная</Link>
            <Link href="/admin/interview-creator">Создать опрос</Link>
            <Link href="/admin/interview-list">Список опросов</Link>
        </header>
        <main>
            <div className={classes.AdminLayout}>{children}</div>
        </main>
    </div>
)

export default AdminLayout