import "./CardList.scss";
import Card from "../../components/Card/Card"

const CardList = ({ beersArr }) => {
    const cardListJSX = beersArr.map((beer, index) => {
        return (
            <Card
                key={beer.id}
                name={beer.name}
                img={beer.image_url}
                ABV={beer.abv}
                IBU={beer.ibu}
                EBC={beer.ebc}
                pH={beer.ph}
                brewYear={beer.first_brewed}
                tagline={beer.tagline}
            />
        )
    })
//TODO: make the message working
    const message = (<p >Sorry. No beer has been found.</p>);
    
    return (
        <div className="cardList">
            {beersArr ? cardListJSX : message}
            
        </div>
    )
    
}


export default CardList;