import "./App.scss";
// import beers from "./data/beers";
import CardList from "./components/CardList/CardList"
import Nav from "./components/Nav/Nav";
import { useState } from "react";




const App = () => {

  //get the beers information by API, fetching data
  const [beers, setBeers] = useState([]);
  const getBeers = async() => {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const data = await response.json();
    setBeers(data);
  };

  getBeers();
  //searchBox input and function
  const [search, setSearch] = useState("");

  const handleInput = (event) => {
    const searchItem = event.target.value.toLowerCase();
    setSearch(searchItem);
  }

  //searchBox display
  const filteredBeer = beers.filter((beer) => {
    const beerTitleLower = beer.name.toLowerCase();
    return beerTitleLower.includes(search) && beer;
  });
  

  return (
    <>
      <div className="app">
        
        <header>PUNK</header>
        
        <main>
          <Nav handleInput={handleInput} searchItem={search} />
          <CardList beersArr={filteredBeer} />
        </main>
      </div>
    </>
  );
};

export default App;