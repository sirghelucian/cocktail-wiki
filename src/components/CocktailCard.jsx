import React from "react";
import { useNavigate } from "react-router-dom";
import "./CocktailCard.scss";

function CocktailCard(item) {
    const navigate = useNavigate();
    return (
        <div
            //visualizzazione della card dei cocktail che una volta al click attraverso navigate porta alla pagina dettagliata
            className="card"
            key={item.strDrink}
            onClick={() => {
                navigate("/cocktail/" + item.idDrink);
            }}
        >
            <img src={item.strDrinkThumb} alt={item.strDrink}></img>
            {item.strDrink}
        </div>
    );
}

export default CocktailCard;
