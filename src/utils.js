import axios from "axios";
const server = "https://weather-app-serv.herokuapp.com/" || "http://localhost:8000/";

export const getSearchRequest = async (cityName) => {
    if (!cityName) return [];
    let reply = await axios.get(server + "search?name=" + cityName);
    return reply.data;
}

export const getWeatherRequest = async (key) => {
    const url = `${server}weather?key=${key}`;
    let reply = await axios.get(url);
    return reply.data;
}

export const getFavoritesRequest = async (key) => {
    const url = `${server}favorites?key=${key}`;
    let reply = await axios.get(url);
    return reply.data;
}