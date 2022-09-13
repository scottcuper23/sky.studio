import {Layout} from "../components";
import {useState} from "react";
import {useRouter} from "next/router";

export default function Buried() {
    const [amogus, setAmogus] = useState(0);
    setTimeout(() => setAmogus(amogus + 1), 40);
    return (
        <Layout title="Запятые">
            <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Запятые</h1>
            <p className="text-black dark:text-white">
                Берите сколько нужно, и уходите
            </p>
            <span className="text-black dark:text-white max-w-2xl text-center wrap-anywhere">{",".repeat(amogus)}</span>
        </Layout>
    )
}