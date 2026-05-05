import "./RecipePage.css";
import UsePageTitle from "../../../hooks/UsePageTitle";
import UsePageBackground from "../../../hooks/UsePageBackground";
import HomeButton from "../../../components/HomeButton/HomeButton";
import RecipeCard from "../components/RecipeCard";

function RecipePage() {
    UsePageTitle("Recipes - Ethan Reynolds");
    UsePageBackground("hsl(30, 18%, 87%)");

    return (
        <div className="recipe-page">
            <RecipeCard />
            <HomeButton />
        </div>
    );
}

export default RecipePage;