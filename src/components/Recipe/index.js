import React from "react";
import {
  RecipeContainer,
  Message,
  IconHolder,
  MessageText,
  RecipeViewStyled,
} from "./RecipeElements";
import { VscSmiley } from "react-icons/vsc";
const Recipe = ({ dispatch, recipe }) => {
  return (
    <RecipeContainer>
      {!recipe && (
        <Message className="message">
          <IconHolder className="icon-holder">
            <VscSmiley />
          </IconHolder>
          <MessageText>
            Start by searching for a recipe or an ingredient. Have fun!
          </MessageText>
        </Message>
      )}

      {recipe && <RecipeViewStyled dispatch={dispatch} recipe={recipe} />}
    </RecipeContainer>
  );
};

export default Recipe;
