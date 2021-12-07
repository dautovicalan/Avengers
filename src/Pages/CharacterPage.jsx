import { useParams } from "react-router"
import useFetch from "../Hooks/useFetch";
import '../Styles/CharacterPage.css'
import '../Styles/quake.css'

const CharacterPage = () => {

    const charactersInfo = useFetch('/characters');

    return (
        <div className="characters-container" style={{marginTop: "100px"}}>
            {charactersInfo.length != 0 && charactersInfo.map((element) =>{
                return(
                    <div className="single-character shake-me" key={element.id}>
                        <img src={element.picture} height="200px" width="200px"/>
                        <h1>{element.characterName}</h1>
                        <p>{element.characterLore}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CharacterPage
