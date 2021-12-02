import React from 'react'
import '../Styles/BoxesStyle.css'
import img2 from '../Pictures/Stars.jpg'

const Boxes = () => {

    return (
        <div className="flexbox-container">
                <div className="flexbox-inner-item-1">
                    <h3 className="first-post">
                        "<span id="red-color">Avengers</span>: Endgame is easily the Marvel Cinematic Universe’s <span id="red-color">most ambitious</span>, emotional, and affecting film to date, somehow managing to tie up more than a
                        decade of storytelling in a confident (and mostly coherent) climax - a 
                        hurdle that many other blockbuster franchises have stumbled over in 
                        their final runs." <br/>
                        <span id="red-color">Laura Prudom, IGN</span>
                    </h3>
                    <h3>
                        Marvel has clearly saved the <span id="red-color">best for last</span> and I cannot stress how much those fan service moments will have you cheering. 
                        I highly recommend that you see Endgame in a packed theater of fans so that you can <span id="red-color">experience the climactic</span> ending with the energy of the crowd. <br/>
                        <span id="red-color">Chris Gore, THE GUARDIAN</span>
                    </h3>                                      
                </div>
                <div className="flexbox-inner-item-2">
                    <h3 className="second-post">
                        Even with the interlocking nature of the Marvel Cinematic Universe, 
                        Endgame feels like a <span id="red-color">triumph</span> of narrative engineering -- weaving in enough 
                        callbacks to earlier movies to delight even the nerdiest patrons. <br/>
                        <span id="red-color">Brian Lowry, CNN</span>
                    </h3>
                    <h3>
                        Succeeds at its daunting task: summing up an <span id="red-color">epic</span> struggle with 
                        bedazzling action; with a style that progresses, apart from a few lapses, 
                        from the elegiac through the episodic to the symphonic; 
                        and with more humor, zest and feeling — the real, heartfelt stuff — than you’d dare to expect from what is, after all, an immense industrial undertaking. <br/>
                        <span id="red-color">Joe Morgenstern, THE WALL STREET JOURNAL</span>
                    </h3>
                </div>
        </div>
    )
}

export default Boxes
