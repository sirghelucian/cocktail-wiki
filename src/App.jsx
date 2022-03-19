import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import Cocktail from "./screen/Cocktail";
import NotFound from "./screen/NotFound";
import ButtonAppBar from "./components/AppBar";

function App() {
    /*Applicazione che ti permette ricercare cocktail composta da una Pagina home, 
    dalla quale sarà possibile ricercare i cocktail per nome o ingrediente
	e una volta cliccato su esso si avrà la pagina dettaglio del cocktail dalla quale sarà possibile visualizzare i suoi dettagli 
    oltre alla disponibilità di un bottone che ti visualizzerà un cocktail casuale*/

    return (
        <div className="App">
            <div className="bg-image">
                <BrowserRouter>
                    <ButtonAppBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cocktail/:id" element={<Cocktail />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}
export default App;
