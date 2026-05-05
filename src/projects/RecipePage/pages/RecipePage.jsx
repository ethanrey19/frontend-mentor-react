import "./RecipePage.css";
import usePageTitle from "../../../hooks/usePageTitle";
import usePageBackground from "../../../hooks/usePageBackground";
import HomeButton from "../../../components/HomeButton/HomeButton";
import RecipeCard from "../components/RecipeCard";

function RecipePage() {
    usePageTitle("Recipes - Ethan Reynolds");
    usePageBackground("hsl(30, 18%, 87%)");

    return (
        <div className="recipe-page">
            <RecipeCard />
            <HomeButton />
        </div>
    );
}

export default RecipePage;