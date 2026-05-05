import "./BlogPage.css";
import BlogCard from "../componets/BlogCard";
import HomeButton from "../../../components/HomeButton/HomeButton";
import usePageBackground from "../../../hooks/usePageBackground";
import usePageTitle from "../../../hooks/usePageTitle";

function BlogPage() {
    usePageBackground("hsl(47, 88%, 63%)");
    usePageTitle("Blog Card - Ethan Reynolds");
    
    return (
        <div className="blog-page">
            <BlogCard />
            <HomeButton />
        </div>
    );
}

export default BlogPage;