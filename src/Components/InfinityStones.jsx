import React, { useState, useRef } from 'react'
import "../Styles/InfinityStones.css"

const InfinityStones = () => {

    const stoneNames = [{id: 1, stoneName: 'Mind Stone'}, {id: 1, stoneName: 'Time Stone'}, {id: 1, stoneName: 'Reality Stone'},
    {id: 1, stoneName: 'Space Stone'}, {id: 1, stoneName: 'Power Stone'}, {id: 1, stoneName: 'Soul Stone'}]


    const stoneRef1 = useRef(null);
    const stoneRef2 = useRef(null);
    const stoneRef3 = useRef(null);

    const handleOnHover = (ref) => {
        ref.current.children[0].style.filter = "blur(8px)";
        ref.current.children[2].style.display = "block"
    };
    const handleOffHover = (ref) => {
        ref.current.children[0].style.filter = "none";
        ref.current.children[2].style.display = "none"
    };

    return (
        <div>
            <h1 className="main-header">
                Infinity Stones
            </h1>
            <div className="infinity-stone-section">
                <div className="stone-picture-row">
                    <div ref={stoneRef1} className="stone-component" onMouseEnter={() => handleOnHover(stoneRef1)} onMouseLeave={() => handleOffHover(stoneRef1)}>
                        <img src={require('../Pictures/InfinityStones/time_stone.jpg').default} className="stone-picture"/>
                        <h3 className="stone-name">{stoneNames[0].stoneName}</h3>
                        <p className="stones-paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia perferendis rerum
                             architecto fuga, minus harum nulla commodi repellendus asperiores neque perspiciatis quam, 
                             laudantium est expedita dolore, velit recusandae similique?
                        </p>
                    </div>
                    <div ref={stoneRef2} className="stone-component" onMouseEnter={() => handleOnHover(stoneRef2)} onMouseLeave={() => handleOffHover(stoneRef2)}>
                        <img src={require('../Pictures/InfinityStones/time_stone.jpg').default} className="stone-picture"/>
                        <h3 className="stone-name">{stoneNames[1].stoneName}</h3>
                        <p className="stones-paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia perferendis rerum
                             architecto fuga, minus harum nulla commodi repellendus asperiores neque perspiciatis quam, 
                             laudantium est expedita dolore, velit recusandae similique?
                        </p>
                    </div>
                    <div ref={stoneRef3} className="stone-component" onMouseEnter={() => handleOnHover(stoneRef3)} onMouseLeave={() => handleOffHover(stoneRef3)}>
                        <img src={require('../Pictures/InfinityStones/time_stone.jpg').default} className="stone-picture"/>
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
