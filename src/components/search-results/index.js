import React, { useEffect } from "react";
import { fetchData, API_URL } from "../../utils/fetchData";
import { Link } from "react-router-dom";
import {
  PaginationContainer,
  SearchResultsContainer,
  SearchResultsList,
  SearchRecipeItem,
} from "./SearchResultsElements";
const SearchResults = ({ query, dispatch, page, id, results }) => {
  const fetchRecipes = async (query) => {
    const data = await fetchData(`${API_URL}?search=${query}`);
    dispatch({
      type: "LOAD_RECIPES",
      payload: { recipes: [...data.data.recipes] },
    });
  };
  useEffect(() => {
    fetchRecipes(query);
  }, [query]);
  const start = (page - 1) * 10; // 0
  const end = page * 10;
  const SearchResultsPage = results.slice(start, end);
  return (
    <SearchResultsContainer>
      <SearchResultsList>
        {SearchResultsPage.map((recipe, i) => (
          <SearchRecipeItem key={recipe.id} id={recipe.id}>
            <Link className="recipe-preview-link" to={`/recipe/${recipe.id}`}>
              <div
                className={
                  recipe.id === id
                    ? "preview__link--active preview__link"
                    : "preview__link"
                }
              >
                <figure className="preview__fig">
                  <img src={recipe.image_url} alt={recipe.title} />
                </figure>
                <div className="preview__data">
                  <h4 className="preview__title">{recipe.title}</h4>
                  <p className="preview__publisher">{recipe.publisher}</p>
                  <div className="preview__user-generated">
                    <svg>
                      <use href="src/img/icons.svg#icon-user"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </SearchRecipeItem>
        ))}
      </SearchResultsList>
      <PaginationContainer
        className="pagination"
        page={page}
        results={results}
        dispatch={dispatch}
      />
    </SearchResultsContainer>
  );
};

export default SearchResults;
