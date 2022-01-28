import * as React from "react"

import { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"
import Script from 'next/script'


import styles from "../styles/top.module.scss"

import { Notification, KIND } from "baseui/notification"
import { Input } from "baseui/input"
import {Search} from 'baseui/icon'
import {Button} from 'baseui/button'

// identicon lib
import BoringAv from "boring-avatars"

const Page = () => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const handleClick = (e) =>  {
        e = inputRef.current.value
        window.location.assign(`/${e}`)
    }
    return (
        <div>
            <Head>
                <link rel="canonical" href="https://identicon.go5.run/"/>
                <title key="site:title">identicon | 📒Generates an icon from the input text</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.notify}>
                <Notification  kind={KIND.warning}>
                    {() => "This is a demo version under development. Basically, it does not work properly."}
                </Notification>
                </div>
                <Link href="mailto:hi@kan.run"><a>
                    <button className={styles.button}><span>Contact</span></button>
                </a></Link>
                <div></div>
                <Link href="/ja"><a>
                    <button className={styles.button}><span>JP site</span></button>
                </a></Link>
                <div></div>
                <div className={styles.input_wrap}>
                <Input
                    endEnhancer={<Search size="18px" />}
                    placeholder="Input your name😘"
                    inputRef={inputRef}
                />
                <div id="go">
                <Button onClick={handleClick}>
                    GoGo!
                </Button>
                </div>
                </div>
                <Script src="/js/gogogo.js" />
                <Script src="https://cdn.jsdelivr.net/npm/jdenticon@3.1.1/dist/jdenticon.min.js" />
            </main>
        </div>
    )
}


export default Page