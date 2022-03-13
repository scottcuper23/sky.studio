import Head from 'next/head'
import styles from './Layout.module.css'
import useDarkMode from "use-dark-mode";

export default function Layout({children, title}) {
    const darkmode = useDarkMode(true)

    const baseUrl = "https://otomir23.me/";
    const meta = {
        url: baseUrl,
        title: (title ? title + " | " : "") + "Damir Modyarov (@otomir23)",
        description: "Hi! I am Damir Modyarov - developer from Moscow, Russia. I mostly develop in JS, Java and C#. I am also learning Dart.",
        image: baseUrl + "avatar.jpg"
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description}/>
                <link rel="icon" href="/favicon.ico"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content={meta.url}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:image" content={meta.image}/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={meta.url}/>
                <meta property="twitter:title" content={meta.title}/>
                <meta property="twitter:description" content={meta.description}/>
                <meta property="twitter:image" content={meta.image}/>
            </Head>

            <div onClick={darkmode.toggle} className={styles.themeToggle}><i className={darkmode.value ? "fas fa-lightbulb" : "fas fa-moon"}/></div>

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}
