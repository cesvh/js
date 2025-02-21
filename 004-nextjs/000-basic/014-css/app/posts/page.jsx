// import PostCard from "../../components/PostCard";
import PostCard from "@/components/PostCard";
import "./Posts.css"

// Ciclo normal en react
// useState -> useEffect -> render

// SSC
async function LoadPosts(){
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts_json = await posts.json();
    // console.log(posts_json);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return posts_json;
}

// LoadPosts(); // Lista Posts en la consola de node

export default async function Posts(){
    const posts = await LoadPosts();
    // console.log(posts); // ??? Se muestra en el lado cliente
    return <>
        <h1>Posts page</h1>
        <div className="grid">
        {
            posts.map((post) => (
                <PostCard key={post.id} post={post}/>
            ))
        }
        </div>
    </>;
};
