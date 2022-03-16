import styles from './Socials.module.css'

export default function Socials({ socials }) {
    const tags = []
    for (const i in socials) {
        const social = socials[i]
        tags.push(
            (
                <a href={social.link} className={styles.social} target="_blank" rel="noreferrer">
                    <i className={String(social.icon)}/>
                </a>
            )
        );
    }

    return (
        <div className={styles.socials}>
            {tags}
        </div>
    )
}