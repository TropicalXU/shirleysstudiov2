import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import ScrollTop from './functionalComponents/ScrollTop';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ScrollTop>
        <div>
          <Main />
        </div>
      </ScrollTop>
    </BrowserRouter>
  );
}

export default App;
