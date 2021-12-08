import { useState, useEffect } from "react"
// import api from '../APIs/dataAxios'
import characterApi from '../APIs/characterStoriesAxios';

const apiKey = "d2983b072b2fbf494550a767d5b40bfb";

const useFetch = (resource, characterList) => {
    const[data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let fillingArrary = []
                characterList.map(async (element) => {
                    const response = await characterApi.get(`https://gateway.marvel.com:443/v1/public/${resource}?name=${element}&ts=1&apikey=${apiKey}&hash=d1d17fa9c4005a5d24bfb2a9f6449b78`);
                    fillingArrary.push(response.data.data.results[0]);
                    console.log(data);
                });
                setData(fillingArrary);
                console.log(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, []);
    return data;
}

export default useFetch
