import React from "react";
import { RecipeContainer, RecipeViewStyled } from "./RecipeElements";

const Recipe = ({ dispatch, recipe }) => {
  return (
    <RecipeContainer>
      <RecipeViewStyled dispatch={dispatch} recipe={recipe} />
    </RecipeContainer>
  );
};

export default Recipe;
