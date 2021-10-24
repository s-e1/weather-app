import "./ForecastCard.css";

function ForecastCard({ day, high, low }) {
    return (
        <div className="forecastCard">
            <strong>{day}</strong>
            <div>H: {high + '\u00B0'}c </div>
            <div>L: {low + '\u00B0'}c</div>
        </div>
    );
}

export default ForecastCard;