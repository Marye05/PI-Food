import {
    GET_ALL_RECIPES,
    GET_SEARCH_RECIPES,
    ORDER_ALPHA,
    GET_ALL_DIETS,
    DIET_FILTER,
    CLEAN_DETAIL,
    GET_DETAIL_RECIPE,
} from "./actions";


const initialState = {
    allRecipes: [],
    diets: [],
    detailRecipe: {},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_RECIPES:
            return { ...state, allRecipes: action.payload }

        case GET_ALL_DIETS:
            return {
                ...state,
                diets: action.payload
            }

        case GET_SEARCH_RECIPES:

            const filterTile = [
                ...state.temporal.filter((element) =>
                    element.title.toString().toLowerCase().includes(action.payload.toString().toLowerCase()))
            ] 

            return {
                ...state,
                temporal: filterTile.length === 0 ? ["not found"] : filterTile

            }

        case ORDER_ALPHA:
                return { ...state, allRecipes: action.payload }
           
        case DIET_FILTER:
                return { ...state, diets: action.payload }
             

        case GET_DETAIL_RECIPE:
            return {
                ...state,
                detailRecipe: action.payload }

        case CLEAN_DETAIL:
            return { ...state, detailRecipe: {} };
       


        default:
            return { ...state }
    }
}

export default rootReducer;