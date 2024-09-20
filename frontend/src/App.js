import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import MainScreen from './screens/MainScreen';
import Footer from './components/Footer';
import InfoScreen from './screens/InfoScreen';
import JoinUsPage from './pages/JoinUsPage';


const App = () => {

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="content">
          <Routes>
            <Route
                path="/"
                element={
                  <>
                    <MainScreen />
                    <InfoScreen />
                  </>
                }
            />
          <Route path="/join-us" element={<JoinUsPage />} />
          
          </Routes>
        </main>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
