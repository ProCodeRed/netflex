import './App.css';
import { Banner } from './Components/Banner';
import Navbar from './Components/Navbar';
import { Row } from './Components/Row';
import requests from './requests'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="netflex originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="trending now" fetchUrl={requests.fetchTrending} />
      <Row title="top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="documentary movies" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
