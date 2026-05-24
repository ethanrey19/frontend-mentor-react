import "./RecipePage.css";
import ProjectLayout from "../../../components/ProjectLayout/ProjectLayout";
import usePageTitle from "../../../hooks/usePageTitle";
import usePageBackground from "../../../hooks/usePageBackground";
import RecipeCard from "../components/RecipeCard";

function RecipePage() {
  usePageTitle("Recipes - Ethan Reynolds");
  usePageBackground("hsl(30, 18%, 87%)");

  return (
    <ProjectLayout>
      <div className="recipe-page">
        <RecipeCard />
      </div>
    </ProjectLayout>
  );
}

export default RecipePage;
