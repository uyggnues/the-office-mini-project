// import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header'
import CharacterList from './components/CharacterList'


function App() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("http://localhost:3000/characters")
        const characterList = await resp.json()
        setCharacters(characterList)
      } catch (error) {
        alert(error)
      }
    }

    fetchData()
  }, []);

  return (
    <div>
      <Header />
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
