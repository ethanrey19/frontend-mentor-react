import "./BlogPage.css";
import ProjectLayout from "../../../components/ProjectLayout/ProjectLayout";
import BlogCard from "../componets/BlogCard";
import usePageBackground from "../../../hooks/usePageBackground";
import usePageTitle from "../../../hooks/usePageTitle";

function BlogPage() {
  usePageBackground("hsl(47, 88%, 63%)");
  usePageTitle("Blog Card - Ethan Reynolds");

  return (
    <ProjectLayout>
      <div className="blog-page">
        <BlogCard />
      </div>
    </ProjectLayout>
  );
}

export default BlogPage;
