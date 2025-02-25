import Link from "next/link";

export default function BlogNavbar() {
    return (      
        <nav>
            <h1>Navegación dentro del blog</h1>
            <ul>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/blog/hobby">Blog - Hobby</Link>
                </li>
                <li>
                    <Link href="/blog/books">Blog - Books</Link>
                </li>
                <li>
                    <Link href="/blog/books/sci-fi">Blog - Books - Sci-fi</Link>
                </li>
            </ul>
        </nav>
    );
};
