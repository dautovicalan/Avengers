import { Collapse, Button } from 'react-bootstrap'
import { useState } from 'react';
import '../Styles/CharacterList.css'

const CharacterList = () => {

    const[open, setOpen] = useState(false);

    return (
        <div className='character-list'>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                click
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
    )
}

export default CharacterList
