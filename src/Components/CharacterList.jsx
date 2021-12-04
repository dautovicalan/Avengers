import { useState } from 'react';
import '../Styles/CharacterList.css'

const CharacterList = () => {

    return (
        <div className='character-list'> 
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <img src={require('../Pictures/Characters/ironman.jpg').default} alt="Paris" style={{width:"400px", height:"400px"}} />
                    </div>
                    <div class="flip-box-back" >
                        <h2>Iron Man</h2>
                        <p>What an amazing super hero</p>
                    </div>
                </div>
            </div>
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <img src={require('../Pictures/Characters/thor.jpg').default} alt="Paris" style={{width:"400px", height:"400px"}} />
                    </div>
                    <div class="flip-box-back">
                        <h2>Thor</h2>
                        <p>What an amazing super hero</p>
                    </div>
                </div>
            </div>
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <img src={require('../Pictures/Characters/captainamerica.jpg').default} alt="Paris" style={{width:"400px", height:"400px"}} />
                    </div>
                    <div class="flip-box-back">
                        <h2>Captain America</h2>
                        <p>What an amazing super hero</p>
                    </div>
                </div>
            </div>
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <img src={require('../Pictures/Characters/thanos.jpg').default} alt="Paris" style={{width:"400px", height:"400px"}} />
                    </div>
                    <div class="flip-box-back">
                        <h2>Thanos</h2>
                        <p>What an amazing super hero</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterList
