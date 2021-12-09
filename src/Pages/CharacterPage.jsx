import useFetch from "../Hooks/useFetch";
import '../Styles/CharacterPage.css'

const CharacterPage = () => {
    const charactersInfo = useFetch('characters');

    return (
        <div className="character-component-page">
            <h1 style={{textAlign: "center", fontSize:"3.4rem", marginTop:"10px"}}>Your Endgame Heroes</h1>
            <div className="characters-container" style={{marginTop: "100px"}}>
                {charactersInfo.length !== 0 && charactersInfo.map((element, index) =>{
                    return(
                        <div className="single-character" key={index}>
                            <img src={`${element.thumbnail.path}.${element.thumbnail.extension}`} height="200px" width="200px" alt={`Slikica ${index}`}/>
                            <h1>{element.name}</h1>
                            {element.description !== "" ? <p>{element.description}</p> : <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint accusantium molestiae error. Culpa quasi, nesciunt fugit sed possimus esse molestiae cupiditate tempore iste laborum repellat illum reiciendis modi veritatis omnis.</p>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CharacterPage
