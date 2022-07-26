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
    setSearch(event.target.value)
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
  const getBeers = async (search,ABVFilter,classicFilter,IBUFilter,EBCFilter,acidityFilter) => {
    let url = "https://api.punkapi.com/v2/beers";

    (search) && (url += `&?beer_name=${search}`);
    (ABVFilter) && (url += "?&abv_gt=6");
    (classicFilter) && (url += "&brewed_before=01-2010");
    (IBUFilter) && (url += "&?ibu_gt=60");
    (EBCFilter) && (url += "&?ebv_gt=100");
    //API parameters didn't work for acidity filter
    (acidityFilter) && (beers.filter((beer) => {
      return (beer.ph && beer.ph < 4)
    }))

    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);
  };

  //avoid rerender
  useEffect(() => {
    getBeers(search,ABVFilter,classicFilter,IBUFilter,EBCFilter,acidityFilter)
  }, [search,ABVFilter,classicFilter,IBUFilter,EBCFilter,acidityFilter]);
  

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