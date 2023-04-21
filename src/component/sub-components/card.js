import "./styles/card.css"

const Card = ({image,name}) =>{
    return(
        <div className="card">
            <img src={image} alt='card'/>
            <p>{name}</p>
        </div>
    )

}

export default Card;