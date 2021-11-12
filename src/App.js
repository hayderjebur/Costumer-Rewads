import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import Dashboard from './component/Dashboard';
import { getCostumers } from './apiCalls';

function App() {
  const [costumers, setCostumers] = useState([]);
  useEffect(() => {
    getCostumers().then((data) => setCostumers(data));
  }, []);

  return (
    <>
      <Navbar />
      <Dashboard costumers={costumers} />
    </>
  );
}

export default App;
