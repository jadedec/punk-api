import "./App.scss";
import CardList from "./containers/CardList/CardList";
import Nav from "./containers/Navbar/Navbar";
import BeerInfo from "./containers/BeerInfo/BeerInfo";

import { useState, useEffect } from "react";
//install before import
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

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
    setSearch(event.target.value);
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
  const handleReset = () => {
    setSearch("");
    setABVFilter(false);
    setClassicFilter(false);
    setAcidityFilter(false);
    setIBUFilter(false);
    setEBCFilter(false);
  }

  //API fetch request
  const getBeers = async (ABVFilter, classicFilter, IBUFilter, EBCFilter) => {
    //loop through all the data
    const arr = [];
    for (let i = 1; i < 6; i++) {
      let url = `https://api.punkapi.com/v2/beers?page=${i}&per_page=80`;

      (ABVFilter) && (url += "&abv_gt=6");
      (classicFilter) && (url += "&brewed_before=01-2010");
      (IBUFilter) && (url += "&ibu_gt=60");
      (EBCFilter) && (url += "&ebv_gt=100");

      const response = await fetch(url);
      const data = await response.json();
      Array.prototype.push.apply(arr, data);
    }
    setBeers(arr);
  }

  //avoid rerender
  useEffect(() => {
    getBeers(ABVFilter,classicFilter,IBUFilter,EBCFilter)
  }, [ABVFilter, classicFilter, IBUFilter, EBCFilter]);
  

  //API search by name is not accurate enough
  let filterBeer=beers.filter((beer) => {
      const beerNameLower = beer.name.toLowerCase();
      return beerNameLower.includes(search.toLowerCase());
  });

  // API parameters didn't work for acidity filter
  acidityFilter && (filterBeer = beers.filter((beer) => {
    return (beer.ph < 4)
  }))

  return (
    <Router>
      <div className="app">
        <Nav
          search={search}
          handleInput={handleInput}
          handleABVFilter={handleABVFilter}
          handleAcidityFilter={handleAcidityFilter}
          handleClassicFilter={handleClassicFilter}
          handleEBCFilter={handleEBCFilter}
          handleIBUFilter={handleIBUFilter}
          reset={handleReset}
        />

        <Routes>
          <Route
            path="/punk-api"
            element={<CardList beersArr={filterBeer}/>}
          />

          <Route
            path="/punk-api/beer/:beerId"
            element={<BeerInfo beersArr={filterBeer}/>}
          />

        </Routes>
      </div>
    </Router>
  );
};

export default App;