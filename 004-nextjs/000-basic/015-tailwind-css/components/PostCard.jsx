'use client';
import Link from "next/link";

// RCC
export default function PostCard({ post }) {
    return <>
        <div>
            <Link href={`/posts/${post.id}`}>{post.id}.- {post.title}</Link>
            <p>
                {post.body}
            </p>
            <button onClick={ () => {console.log(`${post.id} - ${post.title}`)} }>Mostrar</button>
        </div>
    </>;
};
