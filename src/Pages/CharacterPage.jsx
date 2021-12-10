import Footer from "../Components/Footer";
import useFetch from "../Hooks/useFetch";
import '../Styles/CharacterPage.css'

const CharacterPage = () => {
    const {data, finished, error} = useFetch('characters');

    return (
        <div className="character-component-page">
            <h1 style={{textAlign: "center", fontSize:"3.4rem", marginTop:"10px"}}>Your Endgame Heroes</h1>
            {!finished && <div className="loading-container">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>}
            {finished && error !== null && <div style={{textAlign: "center", color: "rgb(192, 139, 26)", fontWeight: "bold"}}>
                <h1>{error.message}</h1>
            </div>}
            <div className="characters-container" style={{marginTop: "100px"}}>
                {finished && error === null && data.map((element, index) =>{
                    return(
                        <div className="single-character" key={index}>
                            <img src={`${element.thumbnail.path}.${element.thumbnail.extension}`} height="200px" width="200px" alt={`Slikica ${index}`}/>
                            <h1>{element.name}</h1>
                            {element.description !== "" ? <p>{element.description}</p> : <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint accusantium molestiae error. Culpa quasi, nesciunt fugit sed possimus esse molestiae cupiditate tempore iste laborum repellat illum reiciendis modi veritatis omnis.</p>}
                        </div>
                    )
                })}
            </div>
            <Footer/>
        </div>
    )
}

export default CharacterPage
