import Link from "next/link";
import "./Navbar.css";

export default function Navbar(){
    return (
        // className="navbar"
        <nav className="navbar py-5">
            <h1 className="text-3xl font-bold">
                <Link href="/">Inicio</Link>
            </h1>
            <ul>
                <li>
                    <Link href="/">Principal</Link>
                </li>
                <li>
                    <Link href="/users">Usuarios </Link>
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
