import BlogNavbar from "../../components/BlogNavbar";

export default function BlogLayout({ children }){
    return <>
        <BlogNavbar />
        { children }
    </>;
};