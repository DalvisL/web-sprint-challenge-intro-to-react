import React from 'react';
import styled from 'styled-components';
import Characters from './Characters';

const StyledCharacters = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

export default function Character(props) {
    const characterList = props.characterList;

  return (
    <StyledCharacters>
        {characterList.map((character, index)=> {
            return <Characters character={character} key={index}/>
        })}
    </StyledCharacters>
  )
}
