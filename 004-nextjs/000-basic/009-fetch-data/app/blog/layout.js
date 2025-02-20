import BlogNavbar from "../../components/BlogNavbar";

export const metadata = {
    title: 'My Blog',
    description: 'My blog in Lux web',
}

export default function BlogLayout({ children }){
    return <>
        <BlogNavbar />
        { children }
    </>;
};
