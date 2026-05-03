import "./BlogPage.css";
import BlogCard from "../componets/BlogCard";
import HomeButton from "../../../components/HomeButton/HomeButton";
import UsePageBackground from "../../../hooks/UsePageBackground";
import UsePageTitle from "../../../hooks/UsePageTitle";

function BlogPage() {
    UsePageBackground("hsl(47, 88%, 63%)");
    UsePageTitle("Blog Card - Ethan Reynolds");
    
    return (
        <div className="blog-page">
            <BlogCard />
            <HomeButton />
        </div>
    );
}

export default BlogPage;