import { useRef } from 'react'
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
                        <img src={require('../Pictures/InfinityStones/time_stone.jpg').default} className="stone-picture" alt='Time Stone'/>
                        <h3 className="stone-name time-stone-glow">{stoneNames[0]}</h3>
                        <p className="stones-paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia perferendis rerum
                             architecto fuga, minus harum nulla commodi repellendus asperiores neque perspiciatis quam, 
                             laudantium est expedita dolore, velit recusandae similique?
                        </p>
                    </div>
                    <div ref={stoneRef2} className="stone-component" onMouseEnter={() => handleOnHover(stoneRef2)} onMouseLeave={() => handleOffHover(stoneRef2)}>
                        <img src={require('../Pictures/InfinityStones/mind_stone.jpg').default} className="stone-picture" alt='Mind Stone'/>
                        <h3 className="stone-name mind-stone-glow">{stoneNames[1]}</h3>
                        <p className="stones-paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia perferendis rerum
                             architecto fuga, minus harum nulla commodi repellendus asperiores neque perspiciatis quam, 
                             laudantium est expedita dolore, velit recusandae similique?
                        </p>
                    </div>
                    <div ref={stoneRef3} className="stone-component" onMouseEnter={() => handleOnHover(stoneRef3)} onMouseLeave={() => handleOffHover(stoneRef3)}>
                        <img src={require('../Pictures/InfinityStones/power_stone.jpg').default} className="stone-picture" alt='Power Stone'/>
                        <h3 className="stone-name power-stone-glow">{stoneNames[2]}</h3>
                        <p className="stones-paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia perferendis rerum
                             architecto fuga, minus harum nulla commodi repellendus asperiores neque perspiciatis quam, 
                             laudantium est expedita dolore, velit recusandae similique?
                        </p>
                    </div>
                </div>

                <div className="stone-picture-row">
                    <div ref={stoneRef4} className="stone-component" onMouseEnter={() => handleOnHover(stoneRef4)} onMouseLeave={() => handleOffHover(stoneRef4)}>
                        <img src={require('../Pictures/InfinityStones/soul_stone.jpg').default} className="stone-picture" alt='Soul Stone'/>
                        <h3 className="stone-name soul-stone-glow">{stoneNames[0]}</h3>
                        <p className="stones-paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia perferendis rerum
                             architecto fuga, minus harum nulla commodi repellendus asperiores neque perspiciatis quam, 
                             laudantium est expedita dolore, velit recusandae similique?
                        </p>
                    </div>
                    <div ref={stoneRef5} className="stone-component" onMouseEnter={() => handleOnHover(stoneRef5)} onMouseLeave={() => handleOffHover(stoneRef5)}>
                        <img src={require('../Pictures/InfinityStones/reality_stone.jpg').default} className="stone-picture" alt='Reality Stone'/>
                        <h3 className="stone-name reality-stone-glow">{stoneNames[1]}</h3>
                        <p className="stones-paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia perferendis rerum
                             architecto fuga, minus harum nulla commodi repellendus asperiores neque perspiciatis quam, 
                             laudantium est expedita dolore, velit recusandae similique?
                        </p>
                    </div>
                    <div ref={stoneRef6} className="stone-component" onMouseEnter={() => handleOnHover(stoneRef6)} onMouseLeave={() => handleOffHover(stoneRef6)}>
                        <img src={require('../Pictures/InfinityStones/space_stone.jpg').default} className="stone-picture" alt='Space Stone'/>
                        <h3 className="stone-name space-stone-glow">{stoneNames[2]}</h3>
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
