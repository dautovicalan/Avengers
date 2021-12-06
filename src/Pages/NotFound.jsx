const NotFound = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems:"center", flexDirection:"column"}}>
            <img src={require('../Pictures/Characters/hulk.png').default} alt="Hulk" />
            <h1>404 NOT FOUND</h1>
        </div>
    )
}

export default NotFound
