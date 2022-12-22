import './App.css';
import Gallery from './components/Gallery';
import ButtonBar from './components/ButtonBar';

import {useState, useEffect} from 'react'

function App() {

  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  useEffect(() => {
    document.title = 'Welcome to Yodieland'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])  

  return (
    <div className="App">
      <div>
        <Gallery primaryImage={data.primaryImage} title={data.title} arttist={data.arttistDisplayName} medium={data.medium}/>
      </div>
      <div>
        <ButtonBar/>
      </div>
    </div>
  );
}

export default App;
