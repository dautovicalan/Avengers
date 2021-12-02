import { Collapse, Button, Carousel } from 'react-bootstrap'
import { useState } from 'react';
import '../Styles/CharacterList.css'

const CharacterList = () => {

    const[open, setOpen] = useState(false);

    return (
        <div className='character-list'> 
            <div className='single-character'>
                <div className="character-image">
                    <img src={require('../Pictures/Characters/thor.jpg').default} alt="" />
                </div>
                <h3>Thor</h3>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    Show More Information
                </Button>
                <Collapse in={open}>
                    <div className="character-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore consectetur iusto facere debitis laboriosam atque,
                        quo aut dolorem eius aliquid, illum maxime tempora porro
                        soluta quae sed alias at impedit.
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export default CharacterList
