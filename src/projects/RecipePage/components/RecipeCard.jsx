import "./RecipeCard.css";
import recipeImage from "../assets/images/image-omelette.jpeg";

function RecipeCard() {
  return (
    <div className="recipe-card">
      <img className="recipe-image" src={recipeImage} alt="Recipe Image" />
      <header>
        <h1 className="recipe-header">Simple Omelette Recipe</h1>
      </header>
      <p className="recipe-description">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>

      <div className="recipe-info">
        <h2 className="recipe-info-header">Preparation Time</h2>
        <ul className="recipe-info-list">
          <li className="recipe-info-item">
            <strong>Total:</strong> Approximately 10 minutes
          </li>
          <li className="recipe-info-item">
            <strong>Preparation:</strong> 5 minutes
          </li>
          <li className="recipe-info-item">
            <strong>Cooking:</strong> 5 minutes
          </li>
        </ul>
      </div>

      <div className="recipe-ingredients">
        <h2 className="recipe-section-header">Ingredients</h2>
        <ul className="recipe-ingredients-list">
          <li className="recipe-info-item">2-3 large eggs</li>
          <li className="recipe-info-item">Salt, to taste</li>
          <li className="recipe-info-item">Pepper, to taste</li>
          <li className="recipe-info-item">1 tablespoon of butter or oil</li>
          <li className="recipe-info-item">
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
      </div>

      <div className="recipe-instructions">
        <h2 className="recipe-section-header">Instructions</h2>
        <ol className="recipe-instructions-list">
          <li className="recipe-instructions-item">
            <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a
            pinch of salt and pepper until they are well mixed. You can add a
            tablespoon of water or milk for a fluffier texture.
          </li>
          <li className="recipe-instructions-item">
            <strong>Heat the pan:</strong> Place a non-stick skillet over medium
            heat and add butter or oil.
          </li>
          <li className="recipe-instructions-item">
            <strong>Cook the omelette:</strong> Once the butter is melted and
            bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
            coat the surface.
          </li>
          <li className="recipe-instructions-item">
            <strong>Add fillings (optional):</strong> When the eggs begin to set
            at the edges but are still slightly runny in the middle, sprinkle
            your chosen fillings over one half of the omelette.
          </li>
          <li className="recipe-instructions-item">
            <strong>Fold and serve:</strong> As the omelette continues to cook,
            carefully lift one edge and fold it over the fillings. Let it cook
            for another minute, then slide it onto a plate.
          </li>
          <li className="recipe-instructions-item">
            <strong>Enjoy:</strong> Serve hot, with additional salt and pepper
            if needed.
          </li>
        </ol>
      </div>

      <div className="recipe-nutrition">
        <h2 className="recipe-section-header">Nutrition</h2>
        <p className="recipe-description">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <table className="nutrition-table">
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="nutrition-label">Calories</td>
              <td className="nutrition-value">277kcal</td>
            </tr>
            <tr>
              <td className="nutrition-label">Carbs</td>
              <td className="nutrition-value">0g</td>
            </tr>
            <tr>
              <td className="nutrition-label">Protein</td>
              <td className="nutrition-value">20g</td>
            </tr>
            <tr>
              <td className="nutrition-label">Fat</td>
              <td className="nutrition-value">22g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecipeCard;
