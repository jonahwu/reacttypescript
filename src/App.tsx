import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchCriteria from './components/search'

function App() {
  return (
    <div className="App">
	  <h1>Email Validation</h1>
      <main>
        <SearchCriteria />
      </main>
    </div>
  );
}

export default App;
