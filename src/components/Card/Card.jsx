import "./Card.scss";

const Card = ({name,img,ABV,IBU,EBC,pH,brewYear}) => {
    
    return (
        <div className="card">
            <img className="card__img"
                src={img}
                alt={name}
            />
            <h3 className="card__name">{name}</h3>
            <div className="card-content">
            <h3 className="card-content__name">{name}</h3>
            <p className="card-content__character">ABV: {ABV} </p>
            <p className="card-content__character">IBU: {IBU}</p>
            <p className="card-content__character">EBC: {EBC}</p>
            <p className="card-content__character">pH: {pH}</p>
            <p className="card-content__character">first_brewed: {brewYear}</p>
            <button className="card-content__button">DETAIL</button>
            </div>
        </div>

    )
}


export default Card;