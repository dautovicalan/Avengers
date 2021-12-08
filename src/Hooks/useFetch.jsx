import { useState, useEffect } from "react"
// import api from '../APIs/dataAxios'
import characterApi from '../APIs/characterStoriesAxios';

const apiKey = "d2983b072b2fbf494550a767d5b40bfb";
const characterNames = [encodeURIComponent("iron man"), encodeURIComponent("thor"), encodeURIComponent("captain america"),
encodeURIComponent("thanos"), encodeURIComponent("hulk"), encodeURIComponent("black widow"),
encodeURIComponent("black panther"), encodeURIComponent("Doctor Strange"), encodeURIComponent("Hawkeye"), encodeURIComponent("Nebula"), encodeURIComponent("Spider-Man (Peter Parker)")];

const useFetch = (resource) => {
    const[data, setData] = useState([]);

    const fetchData = () => {
        try {
            characterNames.map(async (element) => {
                const response = await characterApi.get(`https://gateway.marvel.com:443/v1/public/${resource}?name=${element}&ts=1&apikey=${apiKey}&hash=d1d17fa9c4005a5d24bfb2a9f6449b78`);
                setData(data => [...data, response.data.data.results[0]]);
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return data;
}

export default useFetch
