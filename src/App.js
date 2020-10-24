import React, {useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character';
import axios from 'axios';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const CardContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

  `;
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res);
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    console.log(characters),
    <div className="App">
      <h1 className="Header">Rick & Morty Characters</h1>
      <CardContainer>
        {characters.map((char) => {
          return(
            <Character 
              key={char.id} 
              name={char.name} 
              status={char.status} 
              species={char.species}
              gender={char.gender}
              image={char.image}
              type={char.type}
            />
          )
        })}
      </CardContainer>
    </div>
  );
}

export default App;
