import styles from './Projects.module.css'
import Link from 'next/link'

export default function Projects({projects}) {
    const cards = []
    for (const i in projects) {
        const project = projects[i]
        cards.push(
            (
                <Link href={project.url}>
                    <a className={styles.card} target={project.target || ""} rel="noreferrer">
                        <h2 className={styles.title}><i className={String(project.icon)}/> {project.title}</h2>
                        <p className={styles.description}>{project.description}</p>
                        <div className={styles.badges}>
                            {
                                project.badges &&
                                project.badges.map(badge => (
                                    <div key={badge.title} className={styles.badge} style={{
                                        borderColor: badge.color
                                    }}>{badge.text}</div>)
                                )
                            }
                        </div>
                    </a>
                </Link>
            )
        );
    }

    return (
        <div className={styles.projects}>
            {cards}
        </div>
    )
}