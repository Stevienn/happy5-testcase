import React from 'react';
import Roadmap from './components/Roadmap/Roadmap';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css'

function App() {
  return (
    <div className="App">
        <Sidebar />
        <Roadmap />
    </div>  
  );
}

export default App;
