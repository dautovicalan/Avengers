import '../Styles/Marin.css'

const Marin = () => {
    return (
        <div>
            <h1 className="main-header">
                Infinity Stones
            </h1>
            <div className="infinity-stone-section">
                <div className="stone-picture-row">
                    <div className="stone-component">
                        <img src={require('../Pictures/418539.jpg').default} className="stone-picture"/>
                        <h3 className="stone-name">Bok</h3>
                    </div>
                    <div className="stone-component">
                        <img src={require('../Pictures/418539.jpg').default} className="stone-picture"/>
                        <h3 className="stone-name">Bok</h3>
                    </div>
                    <div className="stone-component">
                        <img src={require('../Pictures/418539.jpg').default} className="stone-picture"/>
                        <h3 className="stone-name">Bok</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Marin
