import Link from 'next/link'
import {Project as ProjectType, ProjectTag} from "../../types";
import useDarkMode from "use-dark-mode";

export type ProjectProps = {
    project: ProjectType,
    tags: ProjectTag[]
}

export default function Project({project, tags}: ProjectProps) {
    const darkMode = useDarkMode()

    return (
        <Link href={project.url}>
            <a
                className="p-4 rounded-lg max-w-xs w-full transition-colors
                border border-gray-light dark:border-gray-dark text-gray-dark dark:text-gray-light
                hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white"
                target="_blank" rel="noreferrer"
            >
                <h2 className="text-2xl font-bold mb-2">
                    <i className={`fas ${project.icon}`}/> {project.title}
                </h2>
                <p>{project.description}</p>
                <div className="flex gap-2 flex-wrap mt-2">
                    {
                        project.tags.map(t => {
                            const tag = tags.find(tag => tag.id === t)
                            if (!tag) return null
                            return (
                                <div key={"bdg" + tag.id}
                                     className="border rounded-lg py-1 px-2 text-sm text-current"
                                     style={{
                                         borderColor: (darkMode.value && tag.darkColor) || tag.color,
                                     }}
                                >
                                    {tag.name}
                                </div>)
                        }).filter(t => t !== null)
                    }
                </div>
            </a>
        </Link>
    )
}