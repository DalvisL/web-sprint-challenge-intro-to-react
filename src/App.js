import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Character from './components/Character';

const StyledApp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
    h1 {
      font-size: 3rem;
      text-align: center;
      margin: 20px auto;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterList, setCharacterList] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
      .then(res => setCharacterList(res.data))
      .catch(err => console.error(err))
  }
  ,[]);
  return (
    <>
      <StyledApp>
        <h1 className="Header">CHARACTERS</h1>
        <div className='container'>
          <Character characterList={characterList}/>
        </div>
      </StyledApp>
    </>
  );
}

export default App;
