import {Social as SocialType} from "../../types";

export type SocialProps = {
    social: SocialType
}

export default function Social({ social: {icon, url} }: SocialProps) {
    return (
        <a href={url} key={url}
           className="py-3 px-4 border border-gray-light dark:border-gray-dark hover:border-gray dark:hover:border-gray text-black dark:text-white rounded-lg w-fit transition-colors"
           target="_blank" rel="noreferrer">
            <i className={`fab ${icon}`}/>
        </a>
    )
}