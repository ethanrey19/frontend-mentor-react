import "./BlogCard.css";
import blogImage from "../assets/images//illustration-article.svg"
import avatar from "../assets/images/image-avatar.webp"

function BlogCard() {
    return (
        <div className="blog-card">
            <img src={blogImage} alt="Blog thumbnail" className="blog-thumbnail"/>
            <p className="blog-category">Learning</p>
            <p className="blog-date">Published 21 Dec 2023</p>
            <header>
                <h2 className="blog-title">HTML & CSS foundations</h2>
            </header>
            <p className="blog-description">These languages are the backbone of every website, defining the structure, content and prensentation</p>
            <div className="author">
                <img src={avatar} alt="avatar" className="author-avatar"></img>
                <p className="author-name">Greg Hooper</p>
            </div>
            
        </div>
    );
}

export default BlogCard;