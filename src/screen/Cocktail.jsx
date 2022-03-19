import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Cocktail.scss";

//Creazione di un array per riuscire a gestire la richiesta degli ingredienti dall'api
const tmpArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function Cocktail() {
    const params = useParams();
    const [data, setData] = useState();
    const fetchCocktail = () => {
        //Attraverso l'utilizzo di params.id verifico se si è cliccato sul bottone random
        fetch(
            params.id === "random"
                ? "https://www.thecocktaildb.com/api/json/v1/1/random.php"
                : "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
                      params.id
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data.drinks[0]);
            });
    };

    useEffect(() => {
        fetchCocktail();
    }, [params.id]);

    console.log(data);

    //Quando si inserisce l'id da url e quest'ultimo non esiste per esempio stamperà il seguente messaggio
    if (!data) {
        return <div>loading...</div>;
    }

    return (
        <div>
            <h1>{data.strDrink}</h1>
            <div className="container">
                <img src={data.strDrinkThumb} alt={data.strDrink}></img>
                <p>
                    <h2>Ingredients</h2>
                    <ul className="lista">
                        {/*visualizzazione di tutti gli ingredienti */}
                        {tmpArray.map((idx) => {
                            if (data["strIngredient" + idx]) {
                                return <li>{data["strIngredient" + idx]}</li>;
                            }
                        })}
                    </ul>
                </p>
            </div>
            {/*Stampo le istruzioni di preparazione*/}
            <div className="descrizione">
                <h2>How to prepare</h2>
                <p>{data.strInstructions}</p>
            </div>
        </div>
    );
}

export default Cocktail;
