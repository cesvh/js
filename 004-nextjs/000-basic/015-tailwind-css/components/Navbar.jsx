import Link from "next/link";
import "./Navbar.css";

export default function Navbar(){
    return (
        <nav className="navbar">
            <h1>
                <Link href="/">Inicio</Link>
            </h1>
            <ul>
                <li>
                    <Link href="/">Principal</Link>
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
