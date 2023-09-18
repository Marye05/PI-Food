import CardsContainer from "../../components/CardsContainer/CardsContainer";
import style from './HomePage.module.css'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllRecipes } from "../../redux/actions";

// cuando se monta, que haga el dispatch para que me muestre lo que hay en cardsContainer
// useEffect - useDispatch

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRecipes());
    }, [dispatch])
    return(
        <div className={style.container}>
        <h1>Esta es la vista de Home</h1>
        <CardsContainer />
        </div>
    )
};


export default Home;