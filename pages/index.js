import Image from 'next/image'
import styles from '../styles/Home.module.css'
import avatar from '../public/avatar.jpg'
import Socials from "../components/socials";
import Layout from "../components/layout";
import Projects from "../components/projects";

export default function Home() {
    return (
        <Layout>
            <Image src={avatar} alt={""} width={128} height={128} className={styles.avatar}/>

            <h1 className={styles.title}>
                otomir23
            </h1>

            <p className={styles.description}>
                Hi! I am <b>Damir Modyarov</b> - developer from Moscow, Russia.
                I mostly develop in JS, Java and C#.
                I am also learning Dart.
            </p>

            <Socials socials={
                [
                    {
                        icon: "fab fa-twitter",
                        link: "https://twitter.com/otomir23"
                    },
                    {
                        icon: "fab fa-twitch",
                        link: "https://twitch.tv/otomir23"
                    },
                    {
                        icon: "fab fa-vk",
                        link: "https://vk.com/otomir23"
                    },
                    {
                        icon: "fab fa-tiktok",
                        link: "https://tiktok.com/@otomir23"
                    },
                    {
                        icon: "fab fa-youtube",
                        link: "https://youtube.com/channel/UCxANce5LMe9fClshXypJing"
                    },
                    {
                        icon: "fab fa-github",
                        link: "https://github.com/otomir23"
                    }
                ]
            }/>

            <Projects projects={[
                {
                    icon: "fas fa-user",
                    title: "otomir23.me",
                    description: "My personal website",
                    url: "https://otomir23.me",
                    lang: "JS",
                    langColor: '#ffd500',
                },
                {
                    icon: "fas fa-globe",
                    title: "stormland.ru",
                    description: "Website for private SMP",
                    url: "https://stormland.ru",
                    lang: "TS",
                    langColor: '#267dff',
                },
                {
                    icon: "fas fa-plug",
                    title: "Connect",
                    description: "Simple socket application written on Java",
                    url: "https://github.com/otomir23/connect",
                    lang: "Java",
                    langColor: '#b76200',
                }
            ]}/>
        </Layout>
    )
}
