import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import "../Styles/InfinityStones.css"

const InfinityStones = () => {

    const stoneNames = ['Mind Stone', 'Time Stone', 'Reality Stone', 'Space Stone', 'Power Stone', 'Soul Stone']

    const stoneRef1 = useRef(null);
    const stoneRef2 = useRef(null);
    const stoneRef3 = useRef(null);
    const stoneRef4 = useRef(null);
    const stoneRef5 = useRef(null);
    const stoneRef6 = useRef(null);

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
            <div className="infinity-stone-section">
                <div className="stone-picture-row">
                    <div ref={stoneRef1} className="stone-component" onMouseEnter={() => handleOnHover(stoneRef1)} onMouseLeave={() => handleOffHover(stoneRef1)}>
                        <img src={require('../Pictures/InfinityStones/time_stone.jpg').default} className="stone-picture"/>
                        <h3 className="stone-name time-stone-glow"><Link to="/infinityStonesPage">{stoneNames[1]}</Link></h3>
                        <p className="stones-paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia perferendis rerum
                             architecto fuga, minus harum nulla commodi repellendus asperiores neque perspiciatis quam, 
                             laudantium est expedita dolore, velit recusandae similique?
                        </p>
                    </div>
                    <div ref={stoneRef2} className="stone-component" onMouseEnter={() => handleOnHover(stoneRef2)} onMouseLeave={() => handleOffHover(stoneRef2)}>
                        <img src={require('../Pictures/InfinityStones/mind_stone.jpg').default} className="stone-picture"/>
                        <h3 className="stone-name time-stone-glow"><Link to="/infinityStonesPage">{stoneNames[0]}</Link></h3>
                        <p className="stones-paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia perferendis rerum
                             architecto fuga, minus harum nulla commodi repellendus asperiores neque perspiciatis quam, 
                             laudantium est expedita dolore, velit recusandae similique?
                        </p>
                    </div>
                    <div ref={stoneRef3} className="stone-component" onMouseEnter={() => handleOnHover(stoneRef3)} onMouseLeave={() => handleOffHover(stoneRef3)}>
                        <img src={require('../Pictures/InfinityStones/power_stone.jpg').default} className="stone-picture"/>
                        <h3 className="stone-name time-stone-glow"><Link to="/infinityStonesPage">{stoneNames[4]}</Link></h3>
                        <p className="stones-paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia perferendis rerum
                             architecto fuga, minus harum nulla commodi repellendus asperiores neque perspiciatis quam, 
                             laudantium est expedita dolore, velit recusandae similique?
                        </p>
                    </div>
                </div>

                <div className="stone-picture-row">
                    <div ref={stoneRef4} className="stone-component" onMouseEnter={() => handleOnHover(stoneRef4)} onMouseLeave={() => handleOffHover(stoneRef4)}>
                        <img src={require('../Pictures/InfinityStones/soul_stone.jpg').default} className="stone-picture"/>
                        <h3 className="stone-name time-stone-glow"><Link to="/infinityStonesPage">{stoneNames[5]}</Link></h3>
                        <p className="stones-paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia perferendis rerum
                             architecto fuga, minus harum nulla commodi repellendus asperiores neque perspiciatis quam, 
                             laudantium est expedita dolore, velit recusandae similique?
                        </p>
                    </div>
                    <div ref={stoneRef5} className="stone-component" onMouseEnter={() => handleOnHover(stoneRef5)} onMouseLeave={() => handleOffHover(stoneRef5)}>
                        <img src={require('../Pictures/InfinityStones/reality_stone.jpg').default} className="stone-picture"/>
                        <h3 className="stone-name time-stone-glow"><Link to="/infinityStonesPage">{stoneNames[2]}</Link></h3>
                        <p className="stones-paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia perferendis rerum
                             architecto fuga, minus harum nulla commodi repellendus asperiores neque perspiciatis quam, 
                             laudantium est expedita dolore, velit recusandae similique?
                        </p>
                    </div>
                    <div ref={stoneRef6} className="stone-component" onMouseEnter={() => handleOnHover(stoneRef6)} onMouseLeave={() => handleOffHover(stoneRef6)}>
                        <img src={require('../Pictures/InfinityStones/space_stone.jpg').default} className="stone-picture"/>
                        <h3 className="stone-name time-stone-glow"><Link to="/infinityStonesPage">{stoneNames[3]}</Link></h3>
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
