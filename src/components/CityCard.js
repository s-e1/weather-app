import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getFavoritesRequest } from "../utils";
import "./CityCard.css";


function CityCard({ data, weatherCB }) {
    const [resData, setResData] = useState({});
    let history = useHistory();

    useEffect(() => {
        getFavoritesRequest(data.cityKey)
            .then(res => setResData(res));
    }, [data])

    const goToDetails = () => {
        history.push("/");
        weatherCB(data.cityName, data.cityKey);
    }

    return (
        <div onClick={goToDetails} className="cityCard">
            {resData.text ?
                <div>
                    <h1>{data.cityName}</h1>
                    <div>{resData.temperature + '\u00B0'}c</div>
                    <div>{resData.text}</div>
                </div>
                : null}
        </div>
    );
}

export default CityCard;