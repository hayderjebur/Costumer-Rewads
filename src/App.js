import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar/Navbar';
import Dashboard from './component/Dashboard/Dashboard';
import getCostumers from './apiCalls/getCostumers';
import './App.css';

function App() {
  useEffect(() => {
    getCostumers('/data.json').then((data) => setCostumers(data));
  }, []);
  const [costumers, setCostumers] = useState([]);
  console.log(costumers);
  return (
    <>
      <Navbar />

      <Dashboard costumers={costumers} />
    </>
  );
}

export default App;
