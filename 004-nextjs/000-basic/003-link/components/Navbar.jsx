import Link from "next/link";

export default function Navbar(){
    return (
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
                <Link href="/blog/hobby">Blog - Hobbies</Link>
            </li>
        </ul>
    );
}