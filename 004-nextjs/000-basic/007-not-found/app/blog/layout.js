import BlogNavbar from "../../components/BlogNavbar";

export const metadata = {
    title: 'Not Found',
    description: 'Página dentro de mi página web',
}

export default function BlogLayout({ children }){
    return <>
        <BlogNavbar />
        { children }
    </>;
};