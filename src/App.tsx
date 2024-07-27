import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DriverList from './components/DriverList';
import TeamList from './components/TeamList';
import Standings from './components/Standings';
import './App.css';
import ConstructorStandings from './components/ConstructorStandings';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header bg-gray-800 text-white p-4">
          <h1 className="text-4xl font-bold mb-4">F1 Info</h1>
          <nav className="space-x-4">
            <Link to="/" className="text-xl hover:underline">Home</Link>
            <Link to="/drivers" className="text-xl hover:underline">Drivers</Link>
            <Link to="/teams" className="text-xl hover:underline">Teams</Link>
            <Link to="/standings" className="text-xl hover:underline">WDC Standings</Link>
            <Link to="/constructor-standings" className="text-xl hover:underline">WCC Standings</Link>
          </nav>
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drivers" element={<DriverList />} />
            <Route path="/teams" element={<TeamList />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/constructor-standings" element={<ConstructorStandings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const Home: React.FC = () => (
  <div className="p-4 max-w-4xl mx-auto">
    <h2 className="text-3xl font-semibold mb-4">Welcome to F1 Info</h2>
    <p className="mb-4">Select a section from the menu above to view information about F1 drivers, teams, or standings.</p>
  </div>
);

export default App;
