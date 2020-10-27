import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmailValidator from './components/email'
import A2EmailValidator from './components/a2email'

function App() {
  return (
    <div className="App">
	  <h1>Email Validation</h1>
      <main>
	 // here shows first component
        <EmailValidator />
	 // here shows second component
        <A2EmailValidator />
      </main>
    </div>
  );
}

export default App;
