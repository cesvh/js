import { Suspense } from "react";
import Posts from "../page";

async function LoadPost(id) {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await resp.json();
    // console.log(post);
    return post;
}

export default async function PostPage({ params }){ // PostId(props)
    // console.log(await props); // {params: Promise, searchParams: Promise}
    // console.log(await props.params); // {postId: 'lux'}
    // console.log( await params.postId ); // lux
    const { postId } = await params;
    const post = await LoadPost(postId);
    return <>
        <div>
            <h1>Post id: { postId }</h1>
            <p>{post.id} - {post.title}</p>
            <p>{post.body}</p>
        </div>
        <hr />
        {/* 
            Sin el suspense se renderiza hasta que finaliza la carga del componente Posts
        */}
        <Suspense fallback={<div>Cargando posts...</div>}>
            <Posts />
        </Suspense>
    </>;
};
