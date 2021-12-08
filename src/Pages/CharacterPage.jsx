import { useParams } from "react-router"
import useFetch from "../Hooks/useFetch";
import '../Styles/CharacterPage.css'

const CharacterPage = () => {

    const characterNames = [encodeURIComponent("iron man"), encodeURIComponent("thor"), encodeURIComponent("captain america"),
                            encodeURIComponent("thanos"), encodeURIComponent("spider-man"), encodeURIComponent("black widow"),
                            encodeURIComponent("black panther"), encodeURIComponent("antman")];

    const charactersInfo = useFetch('characters', characterNames);
    console.log(charactersInfo);

    return (
        <div className="characters-container" style={{marginTop: "100px"}}>
            {charactersInfo.length != 0 && charactersInfo.map((element) =>{
                return(
                    <div className="single-character" key={element.id}>
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
