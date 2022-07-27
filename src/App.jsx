import "./App.scss";
import { useState,useEffect } from "react";
// import beers from "./data/beers";

import CardList from "./containers/CardList/CardList";
import Nav from "./containers/Nav/Nav";

const App = () => {

  //useStates
  const [beers, setBeers] = useState([]);
  //searchBox input and function
  const [search, setSearch] = useState("");
  //High Alcohol (ABV value greater than 6%)
  const [ABVFilter, setABVFilter] = useState(false);
  //Classic Range (Was first brewed before 2010)
  const [classicFilter, setClassicFilter] = useState(false);
  //High Acidity (pH lower than 4)
  const [acidityFilter, setAcidityFilter] = useState(false);
  //High Bitterness (IBU greater then 60)
  const [IBUFilter, setIBUFilter] = useState(false);
  //High darkness (EBC greater then 100)
  const [EBCFilter, setEBCFilter] = useState(false);



  //handle function
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearch(cleanInput);
  }
  const handleABVFilter = () => {
    setABVFilter(!ABVFilter)
  }
  const handleClassicFilter = () => {
    setClassicFilter(!classicFilter)
  }
  const handleAcidityFilter = () => {
    setAcidityFilter(!acidityFilter)
  }
  const handleIBUFilter = () => {
    setIBUFilter(!IBUFilter)
  }
  const handleEBCFilter = () => {
    setEBCFilter(!EBCFilter)
  }

  //API fetch request
  const getBeers = async () => {
    //loop through all the data
    const arr = [];
    for (let i = 1; i < 6;i++){
      let url = `https://api.punkapi.com/v2/beers?page=${i}&per_page=80`;
      let response = await fetch(url);
      let data = await response.json();
      Array.prototype.push.apply(arr, data);
    }
    setBeers(arr);
  };

  //avoid rerender
  useEffect(() => {
    getBeers()
  }, []);
  


  //filter function (can't get over 80 result at one time, so use filter instead)

  // const filterBeers = ((search,ABVFilter,classicFilter,IBUFilter,EBCFilter,acidityFilter))=>{beers.filter((beer) => {
  //   if (search) {
  //     const beerNameLower = beer.name.toLowerCase();
  //     return beerNameLower.includes(search)
  //   }
  //   if (ABVFilter) {
  //     return beer.abv > 6
  //   }
  //   if (IBUFilter) {
  //     return beer.ibu > 60
  //   }
  //   if (EBCFilter) {
  //     return beer.ebc > 100
  //   }
  //   if (acidityFilter) {
  //     return beer.ph < 4
  //   }
  //
  //   //if(classicFilter){
  //      const beerBrewYear = parseInt(beer.first_brewed.substring(3,6));
  //      return beerBrewYear < 2010
  // }
  // });
  // setBeers(filterBeers);

  return (
    <>
      <div className="app">
        <header>PUNK</header>
        <main>
          <Nav
            search={search}
            handleInput={handleInput}
            handleABVFilter={handleABVFilter}
            handleAcidityFilter={handleAcidityFilter}
            handleClassicFilter={handleClassicFilter}
            handleEBCFilter={handleEBCFilter}
            handleIBUFilter={handleIBUFilter}
          />

          <CardList beersArr={beers} />
        </main>
      </div>
    </>
  );
};

export default App;