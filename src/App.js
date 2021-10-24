import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import { getSearchRequest, getWeatherRequest } from "./utils";
import "./App.css";

function App() {
    const dispatch = useDispatch();
    const cityName = useSelector(state => state.cityName);
    const cityKey = useSelector(state => state.cityKey);

    useEffect(() => {
        weatherCB(cityName, cityKey);
    }, [])

    const searchCB = (name) => {
        getSearchRequest(name)
            .then(data => {
                dispatch({ type: "SET SEARCH", payload: data });
            })
    }
    const weatherCB = (name, key) => {
        dispatch({ type: "SET NAME", payload: name });
        dispatch({ type: "SET KEY", payload: key });
        getWeatherRequest(key)
            .then(data => {
                dispatch({ type: "SET WEATHER", payload: data });
            })
    }
    return (
        <div className="appContainer">
            <Navbar />
            <Switch>
                <Route exact path="/"><Home searchCB={searchCB} weatherCB={weatherCB} /></Route>
                <Route path="/favorites"><Favorites weatherCB={weatherCB} /></Route>
            </Switch>
            <footer>
                <p>Data provided by <a href="https://developer.accuweather.com/">Accuweather</a></p>
            </footer>
        </div>
    );
}

export default App;
