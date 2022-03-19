import { useState } from "react";
import Input from "../components/Input/Input";
import ListaCocktail from "../components/ListaCocktail";

function Home() {
    const [data, setData] = useState();
    const [filtro, setFiltro] = useState("");

    /*Ricerca cocktail sia per nome sia ingrediente utilizzando Promise.all 
    che accetta un array di promise (tecnicamente si può usare qualsiasi iterabile, ma solitamente si usa un array) 
    e ritorna una nuova promise*/
    const onSubmit = (filtro) => {
        setFiltro(filtro);
        Promise.all([
            fetch(
                "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
                    filtro
            )
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setData(data);
                }),
            fetch(
                "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
                    filtro
            )
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setData(data);
                }),
        ]).catch((err) => {
            console.log(err);
        });
    };
    return (
        <div className="App">
            <Input onChange={onSubmit} />
            {/*Visualizzazione iniziale quando non si è ancora inserito nulla*/}
            {filtro === "" ? (
                <h5>Let's get drunk</h5>
            ) : (
                <ListaCocktail lista={data} />
            )}
        </div>
    );
}

export default Home;
