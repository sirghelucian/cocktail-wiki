import CocktailCard from "./CocktailCard";
import "./ListaCocktail.scss";
function ListaCocktail({ lista }) {
    console.log(lista);

    if (!lista || !lista.drinks) {
        return (
            <div className="sorry">
                We are sorry... the cocktail entered doesn't exist 😢
            </div>
        );
    }
    return (
        <div className="container-list">
            {lista.drinks.map((item) => (
                //visualizzazione di tutte le card che corrispondono alla ricerca
                <CocktailCard
                    strDrinkThumb={item.strDrinkThumb}
                    strDrink={item.strDrink}
                    idDrink={item.idDrink}
                />
            ))}
        </div>
    );
}

export default ListaCocktail;
