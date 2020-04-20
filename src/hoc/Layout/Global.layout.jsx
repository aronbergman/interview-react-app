import React from 'react'
import classes from './Global.module.scss'
import Link from "next/link";

const GlobalLayout = ({children}) => (
    <div className={classes.GlobalLayout}>
        <header>
            <Link href="/">Главная</Link>
            <Link href="/interview-list">Список опросов</Link>
            <Link href="/admin">Авторизация</Link>
        </header>
        <main>
            {children}
        </main>
    </div>
)

export default GlobalLayout