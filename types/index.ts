export type Social = {
    icon: string;
    url: string;
}

export type Project = {
    icon: string;
    title: string;
    description: string;
    url: string;
    tags: number[]
}

export type ProjectTag = {
    id: number;
    name: string;
    color: string;
    darkColor?: string;
}