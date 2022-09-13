import {IconName} from "@fortawesome/free-brands-svg-icons";

export type Social = {
    icon: IconName;
    url: string;
}

export type Project = {
    icon: IconName;
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