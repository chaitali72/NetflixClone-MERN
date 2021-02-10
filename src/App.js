import './App.css';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      
      <header className="App-header">
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchRomanceMovies} isLargeRow={true}/>
        <Row title= "Trending now" fetchUrl={requests.fetchTrending}/>
        <Row title= "TopRated Movies" fetchUrl={requests.fetchTopRated}/>
        <Row title= "ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title= "HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title= "RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title= "SciFi Movies" fetchUrl={requests.fetchSciFi}/>
        <Row title= "Western Movies" fetchUrl={requests.fetchWestern}/>
        <Row title= "Animation Movies" fetchUrl={requests.fetchAnimation}/>
      </header>
    </div>
  );
}

export default App;
