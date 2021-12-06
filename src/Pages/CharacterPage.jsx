import { useParams } from "react-router"
import useFetch from "../Hooks/useFetch";

const CharacterPage = () => {

    const charactersInfo = useFetch('/characters');

    console.log(charactersInfo);


    return (
        <div style={{marginTop: "100px", background: "red"}}>
            mars
        </div>
    )
}

export default CharacterPage
