import React from 'react';
import './App.css';
import Link from './components/search'

function App() {
	const ww:string="8"
  return (
    <div className="App">
	  <h1>Email Validation</h1>
      <main>
        <Link x={ww} y="100" />
      </main>
    </div>
  );
}

export default App;
