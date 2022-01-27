import Layout from "../components/layout";
import {useState} from "react";

export default function Sussy() {
    const [amogus, setAmogus] = useState(0);
    setTimeout(() => setAmogus(amogus + 1), 40);

    return (
        <Layout>
            <span style={{
                maxWidth: "80vw",
                overflowWrap: "anywhere",
                textAlign: "center"
            }}><b>AMOGUS</b> {"ඞ".repeat(amogus)}</span>
        </Layout>
    )
}