import { useState, useEffect } from "react"
//import api from '../APIs/dataAxios'
import characterApi from '../APIs/characterStoriesAxios';

const apiKey = "d2983b072b2fbf494550a767d5b40bfb";
const characterNames = [encodeURIComponent("iron man"), encodeURIComponent("thor"), encodeURIComponent("captain america"),
encodeURIComponent("thanos"), encodeURIComponent("hulk"), encodeURIComponent("black widow"),
encodeURIComponent("black panther"), encodeURIComponent("Doctor Strange"), encodeURIComponent("Hawkeye"), encodeURIComponent("Nebula"), encodeURIComponent("Spider-Man (Peter Parker)"),
encodeURIComponent("Ant-Man (Eric O'Grady)"), encodeURIComponent("Carol Danvers"), encodeURIComponent("Wong"),
encodeURIComponent("War Machine (Iron Man 3 - The Official Game)"), encodeURIComponent("Okoye"),
encodeURIComponent("Pepper Potts"), encodeURIComponent("Valkyrie (Exiles)"),
encodeURIComponent("Peter Quill"), encodeURIComponent("Winter Soldier"), encodeURIComponent("Groot")];

const useFetch = (resource) => {
    const[data, setData] = useState([]);
    const[finished, setFinished] = useState(false);
    const[error, setError] = useState(null);

    const fetchData = () => {
        try {
            characterNames.map(async (element) => {
                await characterApi.get(`https://gateway.marvel.com:443/v1/public/${resource}?name=${element}&ts=1&apikey=${apiKey}&hash=d1d17fa9c4005a5d24bfb2a9f6449b78`)
                .then(response => {
                    setData(data => [...data, response.data.data.results[0]]);
                    setError(null);
                })
                .catch((error) => {
                    console.log(error.message)
                    setData(null);
                    setError(error);
                    setFinished(true);
                });
            });
            // ! This is only for testing purpose. Remove before production
            setTimeout(() => {
                setFinished(true);
            }, 5000);
        } catch (error) {
            console.log(error.message);
            setFinished(true);
            setError(error.message);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return {data, finished, error};
}

export default useFetch
