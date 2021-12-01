import React from 'react'
import '../Styles/Main.css'
import img1 from '../Pictures/avengers.jpg'

const MainPic = () => {
    return (
        <div>
            <div className="flexbox-container">
                <div className="flexbox-item-1">
                     <h1 class="quote">We're In The Endgame Now.</h1>
                     <h1 class="quote-1">“Cause if we can’t protect the Earth, you can be damn sure we’ll avenge it.”</h1>
                     <h1 class="quote-2">“If we’re going to win this fight, some of us might have to lose it.”</h1>
                    <img className="main-picture" src={img1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MainPic
