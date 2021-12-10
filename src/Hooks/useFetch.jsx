import { useState, useEffect } from "react"
//import api from '../APIs/dataAxios'
import characterApi from '../APIs/characterStoriesAxios';
import { characterNames } from "../APIs/characterNames";

const apiKey = "d2983b072b2fbf494550a767d5b40bfb";


const useFetch = (resource) => {
    const[data, setData] = useState([]);
    const[finished, setFinished] = useState(false);
    const[error, setError] = useState(null);

    const fetchData = () => {
        characterNames.map(async (element) => {
            await characterApi.get(`https://gateway.marvel.com:443/v1/public/${resource}?name=${element}&ts=1&apikey=${apiKey}&hash=d1d17fa9c4005a5d24bfb2a9f6449b78`)
            .then(response => {
                setData(data => [...data, response.data.data.results[0]]);
                setError(null);
            })
            .catch((error) => {
                setData(null);
                setError(error);
            });
        });
        // ! This is only for testing purpose. Remove before production
        setTimeout(() => {
            setFinished(true);
        }, 5000);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return {data, finished, error};
}

export default useFetch
