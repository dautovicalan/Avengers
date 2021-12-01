const Character = ({items}) => {
    return (
        items.map((item) => {
            return(
                <div className="character-infos" key={item.id}>
                    <h3>{item.name}</h3>
                </div>
            )
        })
    )
}

export default Character
