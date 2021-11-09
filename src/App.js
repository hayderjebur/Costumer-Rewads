import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './component/Navbar';
import Dashboard from './component/Dashboard';
import './App.css';

function App() {
  const [costumers, setCostumers] = useState([]);

  const getCostumers = useCallback(
    () => fetch('/data.json').then((response) => response.json()),
    []
  );

  useEffect(() => {
    getCostumers().then((data) => setCostumers(data));
  }, [getCostumers]);

  return (
    <>
      <Navbar />
      <Dashboard costumers={costumers} />
    </>
  );
}

export default App;
