import * as React from "react"

import { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"
import Script from 'next/script'
import { useRouter } from 'next/router'


import styles from "../styles/top.module.scss"

import { Notification, KIND } from "baseui/notification"

// identicon lib
import BoringAv from "boring-avatars"


const Page = () => {
    const router = useRouter()
    const { text } = router.query
    const name: string = text as string
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
                <div></div>
                <svg width="200" height="200" data-jdenticon-value={text}></svg>
                <div></div>
                <div id='identicon'></div>
                <div></div>
                <BoringAv
                    size={200}
                    name={String(text)}
                    variant="beam"
                    colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                />
                <div></div>
                <BoringAv
                    size={200}
                    name={String(text)}
                    variant="pixel"
                    colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                />
                <div></div>
                <BoringAv
                    size={200}
                    name={String(text)}
                    variant="sunset"
                    colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                />
                <div></div>
                <BoringAv
                    size={200}
                    name={String(text)}
                    variant="ring"
                    colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                />
                <div></div>
                <BoringAv
                    size={200}
                    name={String(text)}
                    variant="bauhaus"
                    colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                />
                <Script src="https://cdn.jsdelivr.net/npm/jdenticon@3.1.1/dist/jdenticon.min.js" />
            </main>
        </div>
    )
}


export default Page