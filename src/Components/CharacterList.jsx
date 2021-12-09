import { useState } from 'react';
import '../Styles/CharacterList.css'
import { Link } from 'react-router-dom';

const CharacterList = () => {

    return (

        <div className='characters-container-list'>
            <div className='character-list'>
                <Link to={`/character`}>
                    <div class="flip-box">
                        <div class="flip-box-inner">
                            <div class="flip-box-front">
                                <img src={require('../Pictures/Characters/ironman.jpg').default} alt="Paris" style={{width:"400px", height:"400px"}} />
                            </div>
                        </div>
                    </div>
                </Link>
                <div class="flip-box">
                    <div class="flip-box-inner">
                        <div class="flip-box-front">
                            <img src={require('../Pictures/Characters/thor.jpg').default} alt="Paris" style={{width:"400px", height:"400px"}} />
                        </div>
                    </div>
                </div>
                <div class="flip-box">
                    <div class="flip-box-inner">
                        <div class="flip-box-front">
                            <img src={require('../Pictures/Characters/captainamerica.jpg').default} alt="Paris" style={{width:"400px", height:"400px"}} />
                        </div>
                    </div>
                </div>
                <div class="flip-box">
                    <div class="flip-box-inner">
                        <div class="flip-box-front">
                            <img src={require('../Pictures/Characters/thanos.jpg').default} alt="Paris" style={{width:"400px", height:"400px"}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterList
