import React, { useState } from 'react'
import "../Styles/InfinityStones.css"

const InfinityStones = () => {

    const stoneNames = [{id: 1, stoneName: 'Mind Stone'}, {id: 1, stoneName: 'Time Stone'}, {id: 1, stoneName: 'Reality Stone'},
    {id: 1, stoneName: 'Space Stone'}, {id: 1, stoneName: 'Power Stone'}, {id: 1, stoneName: 'Soul Stone'}]

    const [stoneName, setStoneName] = useState('')

    return (
        <div>
            <h1 className="main-header">
                Infinity Stones
            </h1>
            <div className="infinity-stone-section">
                <div className="stone-picture-row">
                    <div className="stone-component">
                        <img src={require('../Pictures/InfinityStones/time_stone.jpg').default} className="stone-picture"/>
                        <h3 className="stone-name">{stoneNames[0].stoneName}</h3>
                        <p className="stones-paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia perferendis rerum
                             architecto fuga, minus harum nulla commodi repellendus asperiores neque perspiciatis quam, 
                             laudantium est expedita dolore, velit recusandae similique?
                        </p>
                    </div>
                    <div className="stone-component">
                        <img src={require('../Pictures/InfinityStones/mind_stone.jpg').default} className="stone-picture"/>
                        <h3 className="stone-name">{stoneNames[1].stoneName}</h3>
                        <p className="stones-paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia perferendis rerum
                             architecto fuga, minus harum nulla commodi repellendus asperiores neque perspiciatis quam, 
                             laudantium est expedita dolore, velit recusandae similique?
                        </p>
                    </div>
                    <div className="stone-component">
                        <img src={require('../Pictures/InfinityStones/power_stone.jpg').default} className="stone-picture"/>
                        <h3 className="stone-name">{stoneNames[2].stoneName}</h3>
                        <p className="stones-paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia perferendis rerum
                             architecto fuga, minus harum nulla commodi repellendus asperiores neque perspiciatis quam, 
                             laudantium est expedita dolore, velit recusandae similique?
                        </p>
                    </div>
                </div>
                <div className="stone-picture-row">
                    <div className="stone-component">
                        <img src={require('../Pictures/InfinityStones/soul_stone.jpg').default} className="stone-picture"/>
                        <h3 className="stone-name">{stoneNames[0].stoneName}</h3>
                        <p className="stones-paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia perferendis rerum
                             architecto fuga, minus harum nulla commodi repellendus asperiores neque perspiciatis quam, 
                             laudantium est expedita dolore, velit recusandae similique?
                        </p>
                    </div>
                    <div className="stone-component">
                        <img src={require('../Pictures/InfinityStones/reality_stone.jpg').default} className="stone-picture"/>
                        <h3 className="stone-name">{stoneNames[1].stoneName}</h3>
                        <p className="stones-paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia perferendis rerum
                             architecto fuga, minus harum nulla commodi repellendus asperiores neque perspiciatis quam, 
                             laudantium est expedita dolore, velit recusandae similique?
                        </p>
                    </div>
                    <div className="stone-component">
                        <img src={require('../Pictures/InfinityStones/space_stone.jpg').default} className="stone-picture"/>
                        <h3 className="stone-name">{stoneNames[2].stoneName}</h3>
                        <p className="stones-paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia perferendis rerum
                             architecto fuga, minus harum nulla commodi repellendus asperiores neque perspiciatis quam, 
                             laudantium est expedita dolore, velit recusandae similique?
                        </p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default InfinityStones
