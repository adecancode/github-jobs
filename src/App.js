import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Card from './components/Card'
import axios from 'axios'


function App() {
  const [datas, dataInfos] = useState('')

  useEffect(() => {
    getInfo();
  }, [])
  
  const getInfo = () => {
    axios.get(`https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json`)
    .then((res) => {
      console.log(res.data)
      const allCards = res.data
      dataInfos(allCards)
    })
    .then(err => {
      console.log(err)
    })
  };

  return (
    <div className="App">
      <Header />
      <Card datas={datas} />
    </div>
  );
}

export default App;
