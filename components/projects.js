import styles from './Projects.module.css'

export default function Projects({projects}) {
    const cards = []
    for (const i in projects) {
        const project = projects[i]
        cards.push(
            (
                <a href={project.url} className={styles.card} target="_blank" rel="noreferrer">
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
            )
        );
    }

    return (
        <div className={styles.projects}>
            {cards}
        </div>
    )
}