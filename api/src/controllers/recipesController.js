const { Recipe, Diet } = require('../db.js');
const axios = require('axios');
const {API_KEY} = process.env;
const numRecipe = 100;

//TRAIGO LOS DATOS DE LA API Y LO DEVUELVO EN EN UN OBJETO JSON
const getApiInfo = async () => {
    // traigo la info de la api
    const apiInfo = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`);
    // luego recorro la info de la api
    const resultApiInfo = await apiInfo.data.results.map(data => {
    
        if(data.vegetarian){
            data.diets.push("vegetarian")
        }
    
        return {
            id: data.id,
            title: data.title,
            imag: data.image,
            healthScore: data.healthScore,
            summary: data.summary,//.replace(/[^a-zA-Z ^:^/]/g, ""),
            steps: data.analyzedInstructions[0] && data.analyzedInstructions[0].steps ? data.analyzedInstructions[0].steps.map(s => s.step) : "",
            diets: data.diets
        }
    });
    return resultApiInfo
};
//TRAIGO TODOS LAS RECIPES CREADOS DESDE LA BASE DE DATOS EN LA TABLA recipe, Y QUE INCLUYA LA TABLA diets CON SU ATRIBUTO NAME
const getDbInfo = async () => {
     const recipe = await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: [],
            }, 
        }
    })

    const recipesDB = await recipe.map(data =>{
        return {
            id: data.id,
            title: data.name,
            imag: data.image,
            health_score: data.health_score,
            summary: data.summary,
            steps: data.steps,
            createInDb: true,
            diets: data.diets.map(diet=> diet.name)
        }
    })
    return recipesDB
};



//TRAIGO TODOS LOS RECIPES, TANTO DE LA API COMO DE LA DB.
const getAllInfo = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    return apiInfo.concat(dbInfo);   
};

module.exports = {
    getAllInfo,
}
