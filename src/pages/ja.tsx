import * as React from "react"

import { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"
import Script from 'next/script'


import styles from "../styles/top.module.scss"

import { Notification, KIND } from "baseui/notification"

const Page = () => {
    return (
        <div>
            <Head>
                <link rel="canonical" href="https://identicon.go5.run/"/>
                <title key="site:title">identicon | 📒Generates an icon from the input text</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.notify}>
                    <Notification  kind={KIND.warning}>
                        {() => "これは開発中のデモ版です。基本的には正常に動作しません。"}
                    </Notification>
                </div>
                <Link href="mailto:hi@kan.run"><a>
                    <button className={styles.button}><span>Contact</span></button>
                </a></Link>
            </main>
        </div>
    )
}


export default Page