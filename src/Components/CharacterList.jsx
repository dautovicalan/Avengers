import '../Styles/CharacterList.css'
import { Link } from 'react-router-dom';
import video from '../Videos/character-scenes.mp4';

const CharacterList = () => {

    return (

        <div className='characters-container-list'>
            <video autoPlay muted loop>
                <source src={video} type='video/mp4' />
            </video>
            <Link to="/characters">
                Learn more about your heroes...
            </Link>
        </div>
    )
}

export default CharacterList
