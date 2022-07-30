import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  const Test = () => <div>TEST</div>

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            Test
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
