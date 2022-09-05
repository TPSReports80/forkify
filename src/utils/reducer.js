import { nanoid } from "nanoid";

export const reducer = (state, action) => {
  if (action.type === "CLEAR_STATE") {
    return {
      ...state,
      recipe: null,
      search: { ...state.search, results: [], query: "" },
    };
  }
  if (action.type === "CHANGE_QUERY") {
    return {
      ...state,
      search: { ...state.search, query: action.payload.query },
    };
  }
  if (action.type === "LOAD_RECIPES") {
    return {
      ...state,
      search: { ...state.search, results: action.payload.recipes },
    };
  }

  if (action.type === "SET_RECIPE") {
    let newRecipe;
    if (state.bookmarks.some((item) => item.id === action.payload.id)) {
      newRecipe = { ...action.payload, isBookmarked: true };
    } else {
      newRecipe = { ...action.payload, isBookmarked: false };
    }
    return {
      ...state,
      id: action.payload.id,
      loading: false,
      recipe: newRecipe,
    };
  }
  if (action.type === "PREV_PAGE") {
    return {
      ...state,
      search: { ...state.search, page: state.search.page - 1 },
    };
  }
  if (action.type === "NEXT_PAGE") {
    console.log("next page");
    return {
      ...state,
      search: { ...state.search, page: state.search.page + 1 },
    };
  }
  if (action.type === "DEC_SERVING" && state.recipe.servings > 1) {
    const newServings = state.recipe.servings - 1;
    const ingArray = state.recipe.ingredients.map((item) => {
      return {
        ...item,
        quantity: (item.quantity * newServings) / state.recipe.servings,
      };
    });
    return {
      ...state,
      recipe: {
        ...state.recipe,
        servings: newServings,
        ingredients: ingArray,
      },
    };
  }
  if (action.type === "INC_SERVING") {
    const newServings = state.recipe.servings + 1;
    const ingArray = state.recipe.ingredients.map((item) => {
      return {
        ...item,
        quantity: (item.quantity * newServings) / state.recipe.servings,
      };
    });
    return {
      ...state,
      recipe: {
        ...state.recipe,
        servings: newServings,
        ingredients: ingArray,
      },
    };
  }
  if (action.type === "TOGGLE_BOOKMARK") {
    action.payload.recipe.isBookmarked = !action.payload.recipe.isBookmarked;
    console.log(action.payload);
    const newRecipe = {
      ...state.recipe,
      isBookmarked: action.payload.recipe.isBookmarked,
    };
    if (newRecipe.isBookmarked) {
      console.log(" add into array");

      const newArray = [...state.bookmarks, newRecipe];
      localStorage.setItem("bookmarks", JSON.stringify(newArray));
      return {
        ...state,
        recipe: newRecipe,
        bookmarks: newArray,
      };
    } else {
      console.log(" remove from array");

      const index = state.bookmarks.findIndex(
        (el) => el.id === action.payload.recipe.id
      );
      const newArray = state.bookmarks.filter((item) => {
        return item.id !== action.payload.recipe.id;
      });
      localStorage.setItem("bookmarks", JSON.stringify(newArray));
      return {
        ...state,
        recipe: newRecipe,
        bookmarks: newArray,
      };
    }
  }
  if (action.type === "TOGGLE_FORM") {
    return {
      ...state,
      showForm: !state.showForm,
    };
  }

  if (action.type === "SEND_RECIPE") {
    console.log(action.payload);

    const ingredients = Object.entries(action.payload)
      .filter((entry) => entry[0].startsWith("ingredient") && entry[1] !== "")
      .map((ing) => {
        const ingArr = ing[1].split(",").map((el) => el.trim());
        // const ingArr = ing[1].replaceAll(' ', '').split(',');
        if (ingArr.length !== 3)
          throw new Error(
            "Wrong ingredient format! Please use the correct format :)"
          );

        const [quantity, unit, description] = ingArr;

        return { quantity: quantity ? +quantity : null, unit, description };
      });
    const recipe = {
      title: action.payload.title,
      source_url: action.payload.sourceUrl,
      image_url: action.payload.image,
      publisher: action.payload.publisher,
      cooking_time: +action.payload.cookingTime,
      servings: +action.payload.servings,
      ingredients,
      id: nanoid(),
    };
    fetch(
      "https://forkify-api.herokuapp.com/api/v2/recipes?key=e713fb07-d9bf-440f-8fc0-a6a7f5d9df94",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
    return {
      ...state,
      recipe,
      id: recipe.id,
      showForm: !state.showForm,
      recipeForm: recipe,
    };
  }

  return state;
};
