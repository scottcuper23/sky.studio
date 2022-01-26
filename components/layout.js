import Head from 'next/head'
import styles from './Layout.module.css'

export default function Layout({ children, title }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title ? title + " | " : ""} Damir Modyarov (@otomir23)</title>
                <meta name="description" content="..?"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}
