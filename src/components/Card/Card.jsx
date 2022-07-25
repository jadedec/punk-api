import "./Card.scss";
import { useState } from "react";
import close from "../../assets/images/close.svg";

const Card = ({name,img,abv,description}) => {
    
    const [showText, setShowText] = useState(false);
    const handleClick = () => {
        setShowText(!showText);
    };
    
    const pictureJSX = (
        <div className="card-content">
            <h3 className="card-content__name">{name}</h3>
            <h4 className="card-content__abv">ABV:{abv}%</h4>
            <button className="card-content__button"
                onClick={handleClick}>DETAIL</button>
        </div>

    );
    
    const textJSX = (
        <div className="card-content">
            <img src={close} className="card-content__close"
                onClick={handleClick} alt="Close text" />
            <h3 className="card-content__heading">{name}</h3>
            {description.split(".").map(sentence => (
                <p className="card-content__description">
                    {sentence + "."}</p> 
            ))}
        </div>

    );
    

    return (
        <div className="card">
            <img
                className="card__img"
                src={img}
                alt={name}
            />
            {showText ? textJSX : pictureJSX}
        </div>
    )
}


export default Card;