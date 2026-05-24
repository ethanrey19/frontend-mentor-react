import "./ProjectLayout.css";
import { Link } from "react-router-dom";

function ProjectLayout({ children }) {
  return (
    <>
      <Link to="/">
        <button className="home-button">Return Home</button>
      </Link>

      <main className="project-page">{children}</main>
    </>
  );
}

export default ProjectLayout;
