
import "./BeerInfo.scss";
import { useParams } from "react-router-dom";

const BeerInfo = ({ beersArr } ) => {
    const { beerId } = useParams();
    const {
        image_url,
        name,
        abv,
        ibu,
        ebc,
        ph,
        first_brewed,
        tagline,
        food_pairing,
        brewers_tip,
        description
    }  = beersArr.find((beer) => beer.id === beerId);

return (
    <article className="beer-info">
    <div className="beer-info__banner">
            <img
                src={image_url}
                className="beer-info__img"
                alt={name}
            />
    </div>
    <div className="beer-info__content">
        <h2 className="beer-info__heading">{name}</h2>
        <p>{tagline}</p>
        <ul className="beer-info__detail">
            <li> ABV: {abv} | IBU: {ibu}</li>
            <li> EBC: {ebc} | pH: {ph}</li>
            <li> First brewed: {first_brewed}</li>
        </ul>
        <h2 className="beer-info__heading">Detail</h2>
        <ul className="beer-info__detail">
            <li> Food pairing: {food_pairing} </li>
            <li> Brewers tip: {brewers_tip} </li>
            <li> Description: {description} </li>
        </ul>
    </div>
    </article>
);
};

export default BeerInfo;