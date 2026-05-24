import "./NotFound.css";
import ProjectLayout from "../../components/ProjectLayout/ProjectLayout"
import usePageTitle from "../../hooks/usePageTitle";

function NotFound() {
  usePageTitle("Not Found - Ethan Reynolds");

  return (
    <ProjectLayout>
      <div className="not-found">
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </ProjectLayout>
  );
}

export default NotFound;
