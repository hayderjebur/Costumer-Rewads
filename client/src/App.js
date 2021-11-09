import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar/Navbar';
import Dashboard from './component/Dashboard/Dashboard';

import './App.css';

const fetchData = () => {
  return fetch('/data.json').then((response) => response.json());
};

function App() {
  useEffect(() => {
    fetchData().then((data) => setCostumers(data));
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
