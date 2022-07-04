import './App.css';
import { Hero } from './components/Hero/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Parse from 'parse';
import WaitingRoom from './components/WaitingRoom/WaitingRoom';
// import { initializeParse } from '@parse/react';

import 'bootstrap/dist/css/bootstrap.min.css';


Parse.liveQueryServerURL = 'wss://pulsecheck.9ijakids.com';
// Parse.CoreManager.setStorageController(Parse.IndexedDB);
Parse.serverURL = 'https://pulsecheck.9ijakids.com/parse'
Parse.initialize('mobi', 'mobi-JSKEY');

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/set-avatar" element={<Login/>} />
          <Route exact path="/waiting-room" element={<WaitingRoom/>} />

        </Routes>
      </Router>
      
    </>

  );
}

export default App;
