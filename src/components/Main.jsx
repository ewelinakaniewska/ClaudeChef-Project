import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

  const [recipeShown, setRecipeShown] = useState(false);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  function showRecipe() {
    setRecipeShown(true);
  }

  return (
    <main className="flex flex-col items-center">
      <form
        action={addIngredient}
        className="flex flex-row justify-center items-center pt-[70px] pb-[48px] gap-[12px]"
      >
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient"
          name="ingredient"
          className="h-[38px] w-[399px] border-[#D1D5DB] border rounded-[6px] text-[0.875rem] pl-[13px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
        />
        <button className="w-[190px] h-[38px] bg-black text-white font-[Inter] rounded-[6px] text-[0.875rem] flex items-center justify-center font-medium">
          + Add ingredient
        </button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          add={addIngredient}
          show={showRecipe}
          ingredients={ingredients}
        />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
