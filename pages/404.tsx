import {Layout} from "../components";
import Link from 'next/link'

export default function Error404() {
    return (
        <Layout title="Page not found">
            <h1 className="text-4xl font-bold text-black dark:text-white mb-4">404</h1>
            <p className="text-black dark:text-white">
                Извините, страница не найдена
            </p>
            <Link href="/">
                <a className="text-gray hover:text-gray-dark dark:hover:text-gray-light transition-colors">Мне все равно, <b title="country roads">отвези меня домой</b></a>
            </Link>
        </Layout>
    )
}