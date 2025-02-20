'use client';

// RCC
export default function PostCard({ post }) {
    return <>
        <div>
            <p>
                {post.id}.- {post.title}
            </p>
            <p>
                {post.body}
            </p>
            <button onClick={ () => {console.log(`${post.id} - ${post.title}`)} }>Mostrar</button>
        </div>
    </>;
};
