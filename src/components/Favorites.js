import { useEffect, useState } from "react";
import ErrorBoundary from "../ErrorBoundary";
import CityCard from "./CityCard";
import "./Favorites.css";

function Favorites({ weatherCB }) {
    const [cityArray, setCityArray] = useState([]);

    useEffect(() => {
        if (!localStorage.weatherApp) return;
        setCityArray(JSON.parse(localStorage["weatherApp"]));
    }, [])

    return (
        <div>
            <ErrorBoundary>
                <div className="favorites">
                    {cityArray.length ? cityArray.map((e, i) => {
                        return <CityCard key={i} data={e} weatherCB={weatherCB} />
                    }) : null}
                </div>
            </ErrorBoundary>
        </div>
    );
}

export default Favorites;
