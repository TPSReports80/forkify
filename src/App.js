import React from "react";
import { reducer } from "./utils/reducer";
import Home from "./pages/Home";
import { GlobalStyles } from "./GlobalStyles";
import { Routes, Route } from "react-router-dom";
import { MainContainer } from "./styled_components/StyledApp";
import Header from "./components/Header";
import Recipe from "./components/Recipe";
import SearchResults from "./components/search-results";
import AddRecipe from "./components/AddRecipe";

const defaultState = {
  showForm: false,

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
function App() {
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  React.useEffect(() => {
    const storage = window.localStorage.getItem("bookmarks");

    if (storage) state.bookmarks = JSON.parse(storage);
  }, []);
  return (
    <MainContainer>
      <GlobalStyles />
      <Header dispatch={dispatch} state={state} />
      <SearchResults
        id={state.id}
        dispatch={dispatch}
        page={state.search.page}
        query={state.search.query}
        results={state.search.results}
      />
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route
          path="/recipe/:id"
          exact
          element={<Recipe dispatch={dispatch} recipe={state.recipe} />}
        />
      </Routes>
      <div
        onClick={() => dispatch({ type: "TOGGLE_FORM" })}
        className={state.showForm ? "overlay" : "overlay hidden"}
      ></div>
      {state.showForm && <AddRecipe state={state} dispatch={dispatch} />}
    </MainContainer>
  );
}

export default App;
