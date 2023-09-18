import axios from "axios";

export const ORDER_RECIPES = "ORDER_RECIPES"
export const GET_ALL_RECIPES = "GET_ALL_RECIPES"
export const GET_SEARCH_RECIPES = "GET_SEARCH_RECIPES"
export const GET_ALL_DIETS = "GET_ALL_DIETS"
export const DIET_FILTER = "DIET_FILTER"
export const POST_RECIPE = "POST_RECIPE"
export const GET_DETAIL_RECIPE = "GET_DETAIL_RECIPE"
export const CLEAN_DETAIL = "CLEAN_DETAIL"

const URL_API = "http://localhost:3001";

export const getAllRecipes = () => {
    return async function (dispatch) {
        const apiData = await axios.get(`${URL_API}/recipes`);
        const recipes = apiData.data;
        dispatch({type: GET_ALL_RECIPES, payload: recipes });
    }
};

export const getDiets = () => {
    return async function (dispatch) {
        const urlAllDiets = await axios.get(`${URL_API}/diets`);
        const diets = await urlAllDiets.data
        dispatch({ type: GET_ALL_DIETS, payload: diets })
    }
}

export const getSearchRecipes = (title) => {
    return { type: GET_SEARCH_RECIPES, payload: title }
};

export const getDetailRecipe = (id) => {
    return async function (dispatch) {
      const urlDetail = await axios.get(`${URL_API}/recipes/${id}`);
      const response = await urlDetail.data
      dispatch({ type: GET_DETAIL_RECIPE, payload: response });
    };
  };

export const orderRecipes = (order) => {
    return { type: ORDER_RECIPES, payload: order}
};

export const filterByDiet = (diet) => {
    return { type: DIET_FILTER, payload: diet }
};

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
  };

   