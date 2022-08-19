import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

import {
  AddRecipeModal,
  CloseModalBtn,
  AddRecipeForm,
} from "./AddRecipeElements";
const AddRecipe = ({ state, dispatch }) => {
  const [recipeForm, setRecipeForm] = React.useState({
    title: "test123",
    image: "test123",
    sourceUrl: "test123",
    publisher: "test123",
    cookingTime: 23,
    servings: 4,
    ingredient_1: "0.5,kg,Rice",
    ingredient_2: "1,,Avocado",
    ingredient_3: ",,salt",
    ingredient_4: "",
    ingredient_5: "",
    ingredient_6: "",
  });

  const handleChange = (e) => {
    setRecipeForm((prevForm) => {
      return {
        ...prevForm,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SEND_RECIPE", payload: recipeForm });
  };

  return (
    <AddRecipeModal>
      <CloseModalBtn onClick={() => dispatch({ type: "TOGGLE_FORM" })}>
        &times;
      </CloseModalBtn>
      <AddRecipeForm onSubmit={(e) => handleSubmit(e)}>
        <div className="upload__column">
          <h3 className="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input
            value={recipeForm.title}
            required
            name="title"
            type="text"
            onChange={handleChange}
          />
          <label>URL</label>
          <input
            value={recipeForm.sourceUrl}
            required
            name="sourceUrl"
            type="text"
            onChange={handleChange}
          />
          <label>Image URL</label>
          <input
            value={recipeForm.image}
            required
            name="image"
            type="text"
            onChange={handleChange}
          />
          <label>Publisher</label>
          <input
            value={recipeForm.publisher}
            required
            name="publisher"
            type="text"
            onChange={handleChange}
          />
          <label>Prep time</label>
          <input
            value={recipeForm.cookingTime}
            required
            name="cookingTime"
            type="number"
            onChange={handleChange}
          />
          <label>Servings</label>
          <input
            value={recipeForm.servings}
            required
            name="servings"
            type="number"
            onChange={handleChange}
          />
        </div>
        <div className="upload__column">
          <h3 className="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value={recipeForm.ingredient_1}
            type="text"
            required
            name="ingredient_1"
            placeholder="Format: 'Quantity,Unit,Description'"
            onChange={handleChange}
          />
          <label>Ingredient 2</label>
          <input
            value={recipeForm.ingredient_2}
            type="text"
            name="ingredient_2"
            placeholder="Format: 'Quantity,Unit,Description'"
            onChange={handleChange}
          />
          <label>Ingredient 3</label>
          <input
            value={recipeForm.ingredient_3}
            type="text"
            name="ingredient_3"
            placeholder="Format: 'Quantity,Unit,Description'"
            onChange={handleChange}
          />
          <label>Ingredient 4</label>
          <input
            value={recipeForm.ingredient_4}
            type="text"
            name="ingredient-_4"
            placeholder="Format: 'Quantity,Unit,Description'"
            onChange={handleChange}
          />
          <label>Ingredient 5</label>
          <input
            value={recipeForm.ingredient_5}
            type="text"
            name="ingredient_5"
            placeholder="Format: 'Quantity,Unit,Description'"
            onChange={handleChange}
          />
          <label>Ingredient 6</label>
          <input
            value={recipeForm.ingredient_6}
            type="text"
            name="ingredient_6"
            placeholder="Format: 'Quantity,Unit,Description'"
            onChange={handleChange}
          />
        </div>
        <button className="btn upload__btn">
          <AiOutlineCloudUpload />
          <span>Upload</span>
        </button>
      </AddRecipeForm>
    </AddRecipeModal>
  );
};

export default AddRecipe;
