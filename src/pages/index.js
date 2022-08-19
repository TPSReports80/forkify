import React from "react";
import { GlobalStyles } from "../GlobalStyles";
import { MainContainer } from "./Home";
import Header from "../components/Header";
import SearchResults from "../components/search-results";
import Recipe from "../components/Recipe";
import AddRecipe from "../components/AddRecipe";
import { reducer } from "./reducer";
import { AJAX, API_URL, KEY } from "../helpers";
const defaultState = {
  showForm: false,
  AddRecipe: false,
  recipeForm: {},
  recipe: null,
  id: "",
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: 10,
  },
  bookmarks: [],
};
const Home = () => {
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  const createRecipeObject = function (data) {
    const { recipe } = data.data;
    return {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      source_url: recipe.source_url,
      image_url: recipe.image_url,
      servings: recipe.servings,
      cooking_time: recipe.cooking_time,
      ingredients: recipe.ingredients,
      ...(recipe.key && { key: recipe.key }),
    };
  };

  const getRecipes = async () => {
    try {
      if (state.search.query) {
        console.log("inside getRecipe func.");
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${state.search.query}`
        );
        const data = await res.json();
        if (!res.ok) {
          throw new Error(`Unable to find recipes. Status: ${res.status}`);
        }
        dispatch({
          type: "LOAD_RECIPES",
          payload: { recipes: data.data.recipes },
        });
      } else return;
    } catch (err) {
      console.log(err);
    }
  };
  const loadRecipe = async (id) => {
    try {
      if (state.id) {
        console.log("inside loadRecipe func.");
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await res.json();
        if (!res.ok)
          throw new Error(`Unable to retrieve recipe. Status: ${res.status}`);
        dispatch({ type: "SET_RECIPE", payload: { recipe: data.data.recipe } });
      }
    } catch (err) {
      console.log(err);
    }
  };
  // const AJAX = async () => {
  //   try {
  //     console.log("outside ajax");
  //     if (state.addRecipe) {
  //       console.log(state.recipeForm);
  //       dispatch({ type: "ADD_RECIPE" });
  //       const data = await AJAX(`${API_URL}?key=${KEY}`, state.recipeForm);
  //       // state.recipe = createRecipeObject(data);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  const AJAX = async () => {
    try {
      console.log("outside AJAX");
      if (state.addRecipe) {
        console.log("inside AJAX");

        const res = await fetch(
          "https://forkify-api.herokuapp.com/api/v2/recipes/?key=0c49ba3f-7679-4e81-82be-a22c7696f721",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(state.recipeForm),
          }
        );
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        const recipe = createRecipeObject(data);
        dispatch({ type: "ADD_RECIPE", payload: { ...recipe } });
        // state.recipe = createRecipeObject(data);
      }
    } catch (err) {
      console.error(err);
    }
  };
  React.useEffect(() => {
    console.log("inside useEffect");

    getRecipes();
    loadRecipe(state.id);
    AJAX();
    // if (storage) state.bookmarks = JSON.parse(storage);
  }, [state.search.query, state.id, state.addRecipe]);

  console.log("inside Home");
  return (
    <MainContainer>
      <GlobalStyles />
      <Header dispatch={dispatch} state={state} />
      <SearchResults
        dispatch={dispatch}
        id={state.id}
        page={state.search.page}
        results={state.search.results}
      />
      <Recipe dispatch={dispatch} recipe={state.recipe} />
      <div
        onClick={() => dispatch({ type: "TOGGLE_FORM" })}
        className={state.showForm ? "overlay" : "overlay hidden"}
      ></div>
      {state.showForm && <AddRecipe state={state} dispatch={dispatch} />}
    </MainContainer>
  );
};

export default Home;
