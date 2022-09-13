import Image from 'next/future/image'
import {Layout, Project, Social} from "../components";
import {useState} from "react";
import {createClient} from "@supabase/supabase-js";
import {GetStaticProps} from "next";
import {Project as ProjectType, ProjectTag, Social as SocialType} from "../types";

type HomeProps = {
    title: string,
    description: string,
    projects: ProjectType[],
    socials: SocialType[],
    projectTags: ProjectTag[]
}

export default function Home({title, description, projects, socials, projectTags}: HomeProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [tag, setTag] = useState("all");

    return (
        <Layout>
            <nav className="fixed left-4 top-4 flex text-sm text-gray font-bold uppercase gap-2">
                <a href="#socials" className="hover:text-gray-dark dark:hover:text-gray-light">Социальные сети</a>
                <a href="#projects" className="hover:text-gray-dark dark:hover:text-gray-light">Проекты</a>
                <a href="#blog" className="hover:text-gray-dark dark:hover:text-gray-light">Блог</a>
            </nav>
            <div className="h-screen snap-y snap-mandatory overflow-y-scroll w-screen">
                <section className="snap-start flex flex-col items-center justify-center min-h-screen py-16"
                         id="socials">
                    <Image src="/avatar.jpg" alt={""} width={128} height={128} className="rounded-full aspect-square"/>

                    <h1 className="font-bold text-center text-6xl text-black dark:text-white my-4">
                        {title}
                    </h1>

                    <div className="text-lg text-center text-gray-dark dark:text-gray-light max-w-lg mb-4">
                        {description
                            .split('\n')
                            .map((p, i) =>
                                <p key={i} className="mb-2">{p}</p>
                            )
                        }
                    </div>

                    <div className="flex justify-center gap-2 max-w-md flex-wrap mb-4">
                        {
                            socials.map((social, i) => (
                                <Social key={"soc" + i} social={social}/>
                            ))
                        }
                    </div>
                </section>

                <section className="snap-start flex flex-col items-center justify-center min-h-screen py-16"
                         id="projects">
                    <h2 className="text-2xl font-bold text-black dark:text-white mb-8">Мои проекты</h2>
                    <div className="flex gap-2">
                        <select
                            className="px-2 py-1 w-fit max-w-sm rounded-lg border mb-4
                                border-gray-light dark:border-gray-dark text-gray-dark dark:text-gray-light bg-white dark:bg-black outline-none"
                            value={tag} onChange={e => setTag(e.target.value.toLowerCase())}
                        >
                            <option value="all">Все</option>
                            {
                                projectTags
                                    .map(tag => tag.name)
                                    .map((tag, i) => (
                                        <option key={"tag" + i} value={tag.toLowerCase()}>{tag}</option>
                                    ))
                            }
                        </select>
                        <input
                            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                            placeholder="Поиск" type="text"
                            className="px-2 py-1 w-full max-w-md rounded-lg border mb-4
                            placeholder:text-gray-light dark:placeholder:text-gray-dark
                            border-gray-light dark:border-gray-dark text-gray-dark dark:text-gray-light bg-white dark:bg-black outline-none"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:max-w-2xl max-w-xs flex-wrap">
                        {projects
                            .filter(
                                p =>
                                    p.title.toLowerCase().includes(searchQuery)
                                    && (tag === "all" || p.tags.map(t => projectTags.find(t1 => t1.id == t).name.toLowerCase()).includes(tag))
                            )
                            .map((project, i) => (
                                <Project project={project} tags={projectTags} key={"proj" + i}/>
                            ))}
                    </div>
                </section>

                <section className="snap-start flex flex-col items-center justify-center min-h-screen py-16" id="blog">
                    <h2 className="text-2xl font-bold text-black dark:text-white mb-8">Блог</h2>
                    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                    <div className="text-gray">
                        // Данный раздел находится в разработке
                    </div>
                </section>
            </div>
            <div className="absolute bottom-4 text-black dark:text-white animate-bounce">
                <i className="fas fa-chevron-down"/>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const supabaseClient = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_TOKEN);

    const {data: title, error: eT} = await supabaseClient
        .from("settings")
        .select("value")
        .eq("key", "title")
        .single();
    const {data: description, error: eD} = await supabaseClient
        .from("settings")
        .select("value")
        .eq("key", "description")
        .single();


    const {data: socials, error: e1} = await supabaseClient
        .from("socials")
        .select("*")
        .order("id", {ascending: true});
    const {data: projects, error: e2} = await supabaseClient
        .from("projects")
        .select("*")
        .order("id", {ascending: true});
    const {data: projectTags, error: e3} = await supabaseClient
        .from("project_tags")
        .select("*")
        .order("id", {ascending: true});

    const error = e1 || e2 || e3 || eT || eD;
    if (error) {
        console.error(error);
        return {
            props: {
                title: "Error",
                description: error.message,
                projects: [],
                socials: [],
                projectTags: []
            }
        };
    }

    return {
        props: {
            title: title.value,
            description: description.value,
            socials,
            projects,
            projectTags
        }
    }
}

