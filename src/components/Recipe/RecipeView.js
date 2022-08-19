import React from "react";
import {
  AiOutlineClockCircle,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineUser,
  AiOutlineCheck,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Fraction } from "fractional";

const RecipeView = ({ className, recipe, dispatch }) => {
  const handleServings = (e) => {
    if (
      e.target.closest("button").classList.contains("btn--decrease-servings")
    ) {
      dispatch({ type: "DEC_SERVING" });
    } else if (
      e.target.closest("button").classList.contains("btn--increase-servings")
    ) {
      dispatch({ type: "INC_SERVING" });
    }
  };
  const handleBookmark = () => {
    dispatch({ type: "TOGGLE_BOOKMARK", payload: { recipe } });
  };
  return (
    <div className={className}>
      <figure className="recipe__fig">
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="recipe__img"
        />
        <h1 className="recipe__title">
          <span>{recipe.title}</span>
        </h1>
      </figure>

      <div className="recipe__details">
        <div className="recipe__info">
          <AiOutlineClockCircle className="recipe__info-icon" />
          <span className="recipe__info-data recipe__info-data--minutes">
            {recipe.cooking_time}
          </span>
          <span className="recipe__info-text">minutes</span>
        </div>
        <div className="recipe__info">
          <AiOutlineUser className="recipe__info-icon" />
          <span className="recipe__info-data recipe__info-data--people">
            {recipe.servings}
          </span>
          <span className="recipe__info-text">servings</span>

          <div className="recipe__info-buttons">
            <button
              onClick={(e) => handleServings(e)}
              className="btn--tiny btn--decrease-servings"
            >
              <AiOutlineMinusCircle className="recipe__info-icon" />
            </button>
            <button
              onClick={handleServings}
              className="btn--tiny btn--increase-servings"
            >
              <AiOutlinePlusCircle className="recipe__info-icon" />
            </button>
          </div>
        </div>

        <button className="btn--round" onClick={handleBookmark}>
          {!recipe.isBookmarked && (
            <BiBookmark className="recipe__info-icon bookmark-icon" />
          )}
          {recipe.isBookmarked && (
            <BsFillBookmarkFill className="recipe__info-icon bookmark-icon" />
          )}
        </button>
      </div>

      <div className="recipe__ingredients">
        <h2 className="heading--2">Recipe ingredients</h2>
        <ul className="recipe__ingredient-list">
          {recipe.ingredients.map((item, index) => {
            return (
              <li key={index + 1} className="recipe__ingredient">
                <AiOutlineCheck className="recipe__icon" />
                <div className="recipe__quantity">
                  {item.quantity ? new Fraction(item.quantity).toString() : ""}
                </div>
                <div className="recipe__description">
                  <span className="recipe__unit">{item.unit} </span>
                  {item.description}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="recipe__directions">
        <h2 className="heading--2">How to cook it</h2>
        <p className="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span className="recipe__publisher"> {recipe.publisher}</span>. Please
          check out directions at their website.
        </p>
        <a
          className="btn--small recipe__btn"
          href={recipe.source_url}
          target="_blank"
        >
          <span>Directions</span>
          <AiOutlineArrowRight className="search__icon" />
        </a>
      </div>
    </div>
  );
};

export default RecipeView;
