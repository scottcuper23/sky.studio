import Head from 'next/head'
import useDarkMode from "use-dark-mode";

export type LayoutProps = {
    title?: string;
    children?: React.ReactNode;
}

export default function Layout({children, title}: LayoutProps) {
    const darkMode = useDarkMode(true, {
        classNameDark: "dark",
    })

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";
    const meta = {
        url: baseUrl,
        title: (title ? title + " | " : "") + (process.env.NEXT_PUBLIC_META_TITLE || "Personal Website"),
        description: process.env.NEXT_PUBLIC_META_DESCRIPTION || "Welcome to my personal website!",
        image: baseUrl + "/avatar.jpg"
    }

    return (
        <div className="min-h-screen px-1 flex flex-col items-center justify-center bg-white dark:bg-black transition-colors">
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

            <div onClick={darkMode.toggle} className="fixed right-4 top-4 cursor-pointer text-gray-dark dark:text-gray-light hover:text-black dark:hover:text-white transition-colors">
                <i className={darkMode.value ? "fas fa-lightbulb" : "fas fa-moon"}/>
            </div>

            <main className={"flex-1 flex flex-col justify-center items-center"}>
                {children}
            </main>
        </div>
    )
}
