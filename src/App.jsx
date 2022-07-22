import "./App.scss";
import beers from "./data/beers";
import CardList from "./components/CardList/CardList"
import Nav from "./components/nav/nav";




const App = () => {
  return (
    <>
      <div className="app">
        
        <header>PUNK</header>
        
        <main>
          <Nav className="nav" />
          <CardList beersArr={beers} />
        </main>
      </div>
    </>
  );
};

export default App;