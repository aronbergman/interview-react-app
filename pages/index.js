import React from 'react'
import Head from 'next/head'

const Home = () => {
    const f = 4;
    return (
        <>
            <Head>
                <title>Home page {f}</title>
            </Head>
            <div>
                <h1>Home page</h1>
            </div>
        </>
    )
}

export default Home;