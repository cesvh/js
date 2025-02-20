import Link from "next/link";

export default function PageNotFound() {
    return <>
        <section>
            <h1>404</h1>
            <p>Página no econtrada</p>
            <Link href="/">Ir a inicio</Link>
        </section>
    </>;
};
