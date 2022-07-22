import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({ beersArr }) => {
    const cardListJSX = beersArr.map((beer, index) => {
        return (
            <Card key={beer.id} name={beer.name} img={beer.image_url} abv={beer.abv} description={beer.description} />
        )
    })
    return (
        <div className="cardList">
            {cardListJSX}
        </div>
    )
    
}


export default CardList;