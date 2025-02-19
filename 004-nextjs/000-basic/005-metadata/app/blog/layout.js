import BlogNavbar from "../../components/BlogNavbar";

export const metadata = {
    title: 'Metadatas - Blog',
    description: 'Blog dentro de mi página web',
}

export default function BlogLayout({ children }){
    return <>
        <BlogNavbar />
        { children }
    </>;
};