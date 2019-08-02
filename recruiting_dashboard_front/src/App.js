import React from 'react';
import './style/App.css';
import Navbar from './components/Navbar';
import DashboardWrapper from './pages/DashboardWrapper';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <DashboardWrapper/>
    </div>
  );
}

export default App;
