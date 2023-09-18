import { Link } from 'react-router-dom';
import style from "./Card.module.css"
// este componente debe mostrar la info de cada receta mapeado(map)
// pero ademas darnos un link para ir al detalle de la receta en cuestión


const Card = (props) => {
    return(
        <div className={style.card}>
          <h3>{props.title}</h3>
          <img src={props.image} alt="Loading..." />

        </div>
    )
};


export default Card;
