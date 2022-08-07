// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from "react";


function App() {
const [news, getNews] = useState([])

const [items, setItems] = useState([])


useEffect(() => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '718ef1983dmsh77713e435bfafbap1f1943jsn03cc80c44594',
      'X-RapidAPI-Host': 'climate-change-news-media.p.rapidapi.com'
    }
  };
  
  fetch(`https://climate-change-news-media.p.rapidapi.com/news/${news}`, options)
    .then(response => response.json())
    .then(json => setItems(json))
    // .then(response => console.log(response))
    .catch(err => console.error(err));

}, [news])

  return (
    <>
    <div>
      <button onClick={() => getNews('') }>News</button>
      <button onClick={() => getNews('telegraph') }>Telegraph</button>
      <button onClick={() => getNews('thetimes') }>The Times</button>
      <button onClick={() => getNews('guardian') }>Guardian</button>
      <button onClick={() => getNews('dm') }>DM</button>
      <button onClick={() => getNews('cityam') }>CITYAM</button>
      <button onClick={() => getNews('smh') }>SMH</button>
      <button onClick={() => getNews('latimes') }>LATIMES</button>
      <button onClick={() => getNews('nyt') }>NYT</button>  
      
      <button onClick={() => getNews('es') }>ES</button>
      <button onClick={() => getNews('un') }>UN</button>
      <button onClick={() => getNews('bbc') }>BBC</button>
      <button onClick={() => getNews('nyp') }>NYP</button>


      <h1>{ news }</h1>

      {items.map(item => {
        return <div>
       
        <a target="_blank" rel="noreferrer" href={item.url}>{item.source}: {item.title}</a>
        </div>
        
        })
      }
    </div>
    </>
  );
}

export default App;
