import "./ProjectCard.css";
import { Link } from "react-router-dom";

const tagStyles = {
  Newbie: "blue",
  Junior: "green",
};

function ProjectCard({ title, image, tag, url }) {
  return (
    <div className="project-card">
      <img className="project-preview" src={image} alt={title}></img>
      <h2 className="project-title">
        <Link to={url}>{title}</Link>
      </h2>
      <h3 className={`tag ${tagStyles[tag]}`}>{tag}</h3>
    </div>
  );
}

export default ProjectCard;
