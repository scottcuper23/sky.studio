import Layout from "../components/layout";
import Link from 'next/link'

export default function Error404() {
    return (
        <Layout title={"Page not found"}>
            <h1><b>404</b></h1>
            sorry, page not found.

            <Link href={'/'}>
                <a className={'link'}>don&apos;t care lmao, <b>take me home</b></a>
            </Link>
        </Layout>
    )
}