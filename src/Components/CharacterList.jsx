import { useState } from 'react';
import '../Styles/CharacterList.css'
import Character from './Character';

const CharacterList = () => {

    const characters = [
        {id: 1, name: "Thanos", power: "bla bla"},
        {id: 2, name: "Thor", power: "bla bla"},
        {id: 3, name: "Captain America", power: "bla bla"}
    ]
    

    return (
        <div className="character-list">
            <Character items={characters}/>
        </div>
    )
}

export default CharacterList
