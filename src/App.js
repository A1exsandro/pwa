import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';

function App() {
  return (
    <main>
      <section>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>  
            </Route>
          </Routes>
        </Router>
      </section>
    </main>
  );
}

export default App;
