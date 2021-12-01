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
                    <img src={require(`../Pictures/InfinityStones/time_stone.jpg`).default} className="stone-picture"/>
                    <img src={require(`../Pictures/InfinityStones/mind_stone.jpg`).default} className="stone-picture"/>
                    <img src={require(`../Pictures/InfinityStones/space_stone.jpg`).default} className="stone-picture"/>
                </div>
                <div className="stone-picture-row">
                    <img src={require(`../Pictures/InfinityStones/soul_stone.jpg`).default} className="stone-picture"/>
                    <img src={require(`../Pictures/InfinityStones/reality_stone.jpg`).default} className="stone-picture"/>
                    <img src={require(`../Pictures/InfinityStones/power_stone.jpg`).default} className="stone-picture"/>
                </div>
            </div>
        </div>
    )
}

export default InfinityStones
