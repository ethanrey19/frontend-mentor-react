import "./Home.css";
import usePageTitle from "../../hooks/usePageTitle";
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";

function Home() {
  usePageTitle("Home - Ethan Reynolds");

  return (
    <div className="home-container">
      <header>
        <h1 className="home-title">My Frontend Mentor Projects</h1>
      </header>

      <main>
        <ProjectsGrid />
      </main>
    </div>
  );
}

export default Home;
