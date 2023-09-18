import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux";
// CardsContainer tiene que renderizar el componente Card
// debe tomar un array de recetas, y por cada receta renderizar Card

const CardsContainer = () => {
    
    // la idea es que estoy venga del store
    // Le permite extraer datos del estado de la tienda Redux, utilizando una función de selección
    const recipes = useSelector(state => state.allRecipes)
    return(
        <div className={style.container}>
            {recipes.map(recipes => {
                return(
                    <Card 
                    key={recipes.id}
                    id={recipes.id}
                    image={recipes.image}
                    title={recipes.title}
                    
                    />
                )
            })}

        </div>
    )
};

export default CardsContainer;