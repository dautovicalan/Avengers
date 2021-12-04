import { Collapse, Button } from 'react-bootstrap'
import { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import ModalWindow from './ModalWindow';
import '../Styles/CharacterList.css'

const CharacterList = () => {


    const[show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const[data, setData] = useState({});

    
    const handleShow = (e) => {

        console.log(e);
        const title = e.target.children[0].innerText;
        const about = e.target.children[1].innerText;
        setData({title, about})
        setShow(true)
    };


    const handleChildClick = (e) => {
        e.stopPropagation();
    }

    
    return (
        <div className='character-list'> 
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <img src={require('../Pictures/Characters/ironman.jpg').default} alt="Paris" style={{width:"400px", height:"400px"}} />
                    </div>
                    <div class="flip-box-back" onClick={(e) => handleShow(e)}>
                        <h2 onClick={(e) => handleChildClick(e)}>Iron Man</h2>
                        <p onClick={(e) => handleChildClick(e)}>What an amazing super hero</p>
                    </div>
                </div>
            </div>
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <img src={require('../Pictures/Characters/thor.jpg').default} alt="Paris" style={{width:"400px", height:"400px"}} />
                    </div>
                    <div class="flip-box-back" onClick={(e) => handleShow(e)}>
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
                    <div class="flip-box-back" onClick={(e) => handleShow(e)}>
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
                    <div class="flip-box-back" onClick={(e) => handleShow(e)}>
                        <h2>Thanos</h2>
                        <p>What an amazing super hero</p>
                    </div>
                </div>
            </div>
            <ModalWindow show={show} handleClose={handleClose} data={data} />
        </div>
    )
}

export default CharacterList
