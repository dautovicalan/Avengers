import { useState, useEffect } from "react"
import api from '../APIs/dataAxios'

const useFetch = (resource) => {
    const[data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await api.get(resource);
                setData(response.data)
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, []);
    return data;
}

export default useFetch
