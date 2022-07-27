import "./Card.scss";
import beer from "../../assets/images/beer.svg"

const Card = ({name,img,ABV,IBU,EBC,pH,brewYear}) => {
    
    return (
        <div className="card">
            {img ? <img className="card-img"
                src={img}
                alt={name}
                />
            :<img className="card-img"
                src={beer}
                alt={name}
                />}
            <h3 className="card-name">{name}</h3>
            <div className="card-content">
            <h3 className="card-content__name">{name}</h3>
            <p className="card-content__character">ABV: {ABV} </p>
            <p className="card-content__character">IBU: {IBU}</p>
            <p className="card-content__character">EBC: {EBC}</p>
            <p className="card-content__character">pH: {pH}</p>
            <p className="card-content__character">First Brewed: {brewYear}</p>
            <button className="card-content__button">DETAIL</button>
            </div>
        </div>

    )
}


export default Card;