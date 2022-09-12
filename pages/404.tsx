import {Layout} from "../components";
import Link from 'next/link'

export default function Error404() {
    return (
        <Layout title="Page not found">
            <h1 className="text-4xl font-bold text-black dark:text-white mb-4">404</h1>
            <p className="text-black dark:text-white">
                sorry, page not found.
            </p>
            <Link href="/">
                <a className="text-gray hover:text-gray-dark dark:hover:text-gray-light transition-colors">don&apos;t care lmao, <b title="country roads">take me home</b></a>
            </Link>
        </Layout>
    )
}