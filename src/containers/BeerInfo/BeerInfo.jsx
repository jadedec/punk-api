
import "./BeerInfo.scss";
import { useParams } from "react-router-dom";
import beer from "../../assets/images/brewdog.png"

const BeerInfo = ({ beersArr } ) => {
    const { beerId } = useParams();
    // const {
    //     image_url,
    //     name,
    //     abv,
    //     ibu,
    //     ebc,
    //     ph,
    //     first_brewed,
    //     tagline,
    //     food_pairing,
    //     brewers_tip,
    //     description
    // }  = beersArr.find((beer) => beer.id === beerId);

// return (
//     <article className="beer-info">
//     <div className="beer-info__banner">
//             <img
//                 src={image_url}
//                 className="beer-info__img"
//                 alt={name}
//             />
//     </div>
//     <div className="beer-info__content">
//             <h2 className="beer-info__heading">{name}</h2>
//             <p>{tagline}</p>
//             <ul className="beer-info__detail">
//                 <li> ABV: {abv} </li>
//                 <li> IBU: {ibu} </li>
//                 <li> EBC: {ebc} </li>
//                 <li> pH: {ph} </li>
//                 <li> First brewed: {first_brewed} </li>
//             </ul>
//         <h2 className="beer-info__heading">Detail</h2>
//         <ul className="beer-info__detail">
//                 <li> Food pairing: {food_pairing} </li>
//                 <li> Brewers tip: {brewers_tip} </li>
//                 <li> Description: {description} </li>
//         </ul>
//     </div>
//     </article>
// );
    
    
    return (
        <article className="beer-info">
        <div className="beer-info__banner">
            <img
                src={beer}
                className="beer-info__img"
                alt="beer"
        />
    </div>
        <div className="beer-info__content">
                <h2 className="beer-info__heading">TXT</h2>
                <p className="beer-info__tagline">TXT</p>
                <ul className="beer-info__detail">
                    <li> ABV:  | IBU: </li>
                    <li> EBC:  | pH: </li>
                    <li> First brewed:  </li>
                </ul>
            <h2 className="beer-info__heading">Detail</h2>
            <ul className="beer-info__detail">
                    <li> Food pairing:  </li>
                    <li> Brewers tip:  </li>
                    <li> Description:  </li>
            </ul>
        </div>
        </article>
    );


};

export default BeerInfo;