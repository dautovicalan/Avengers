import { useParams } from "react-router"

const CharacterPage = () => {

    const{id} = useParams();
    return (
        <div style={{marginTop: "100px", background: "red"}}>
            {id}
        </div>
    )
}

export default CharacterPage
