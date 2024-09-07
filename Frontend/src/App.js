import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GetMatchDetails from './components/GetMatchDetails';
import GetSponsorsDetails from './components/GetSponsorDetails';
import Form from './components/Form';
import GetSponsorsMatches from './components/GetSponsorsMatches';
import Navigation from './components/Navigation'; // Moved Navigation here
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Navigation />
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/match-details" element={<GetMatchDetails />} />
          <Route path="/sponsor-details" element={<GetSponsorsDetails />} />
          <Route path="/form" element={<Form />} />
          <Route path="/sponsor-matches" element={<GetSponsorsMatches />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
