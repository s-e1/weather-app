import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import ForecastCard from "./ForecastCard";
import "./HomeMain.css";

function HomeMain() {

    const cityName = useSelector(state => state.cityName);
    const cityKey = useSelector(state => state.cityKey);
    const weatherResults = useSelector(state => state.weatherResults);

    const [currentWeather, setCurrentWeather] = useState({});
    const [forecast, setForecast] = useState([]);
    const [imgUrl, setImgUrl] = useState("");
    const [isFavorite, setIsFavorite] = useState(false);

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date().getDay();
    const iconSite = "https://developer.accuweather.com/sites/default/files/";

    useEffect(() => {
        if (weatherResults.currentWeather || weatherResults.forecast) {
            setCurrentWeather(weatherResults.currentWeather);
            setForecast(weatherResults.forecast);
            const url = iconSite + weatherResults.currentWeather.icon.padStart(2, '0') + "-s.png"
            setImgUrl(url);
            setIsFavorite(checkIfFavorite());
        }
    }, [weatherResults.currentWeather, weatherResults.forecast])

    const checkIfFavorite = () => {
        if (!localStorage.weatherApp) return false;
        const arr = JSON.parse(localStorage["weatherApp"]);
        const found = arr.some(e => e.cityName === cityName);
        return found;
    }

    const addFavorite = () => {
        setIsFavorite(true);
        let arr;
        if (!localStorage.weatherApp) {
            arr = [];
        } else {
            arr = JSON.parse(localStorage["weatherApp"]);
            const found = arr.some(e => e.cityName === cityName);
            if (found) return;
        }
        arr.push({ cityKey, cityName });
        localStorage["weatherApp"] = JSON.stringify(arr);
    }

    const removeFavorite = () => {
        setIsFavorite(false);
        const arr = JSON.parse(localStorage["weatherApp"]);
        const filteredArr = arr.filter(e => e.cityName !== cityName);
        localStorage["weatherApp"] = JSON.stringify(filteredArr);
    }

    return (
        <div className="homeMain">
            {currentWeather.text ?
                <div >
                    {isFavorite ?
                        <button onClick={removeFavorite}>Remove From Favorites</button> :
                        <button onClick={addFavorite}>Add To Favorites</button>
                    }

                    <div className="currentWeather">
                        <h4>{cityName}</h4>
                        <img src={imgUrl} alt="icon" />
                        <div>{currentWeather.temperature + '\u00B0'}c</div>
                        <div>{currentWeather.text}</div>
                    </div>
                </div>
                : null}
            {forecast.length ?
                <div className="forecast">
                    {forecast.map((e, i) => {
                        return <ForecastCard key={i} high={e.high} low={e.low} day={daysOfWeek[(today + i) % 7]}> </ForecastCard>
                    })}
                </div>
                : null}
        </div>
    );
}

export default HomeMain;