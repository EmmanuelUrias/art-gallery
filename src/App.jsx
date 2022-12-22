import './App.css';
import Gallery from './components/Gallery';
import ButtonBar from './components/ButtonBar';

import {useState, useEffect} from 'react'

function App() {

  let [artId, setArtId] = useState(Math.floor(Math.random() * (471581 - 1 + 1) + 1))
  let [data, setData] = useState({})

  useEffect(() => {
    document.title = {artId}
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])  

  const handleIterate = e => {
    setArtId(artId + Number(e.target.value)) 
  }

  return (
    <div className="App">
      <div>
        <Gallery primaryImage={data.primaryImage} title={data.title} arttist={data.arttistDisplayName} medium={data.medium}/>
      </div>
      <div>
        <ButtonBar handleIterate={handleIterate}/>
      </div>
    </div>
  );
}

export default App;
