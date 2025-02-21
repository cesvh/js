import Link from "next/link";

export default function Navbar(){
    return (
        <nav>
            <h1>Navegación General</h1>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">Acerca de </Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
            </ul>
        </nav>
    );
}
