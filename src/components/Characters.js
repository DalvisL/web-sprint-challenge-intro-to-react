import React, { useState } from 'react'
import styled from 'styled-components';

const StyledCharacters = styled.div`
    border: solid #B5B5B5 2px;
    border-radius: 20px;
    width: 60%;
    background: #FFF;
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    h3 {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 2.5rem;
        color: #443e3e;
        margin-left: 10px;
        align-self: flex-end;
    }
    .card {
        width: 100%;
        height: 40px;
        display: flex;
    }
    .expand-btn {
        display: flex;
        justify-content: flex-end;
        margin-right: 20px;
        button {
            background: none;
            border: none;
            color: #B5B5B5;
            font-family: Arial, Helvetica, sans-serif;
            &:hover {
                color: #555;
                cursor: pointer;
            }
        }
    }
`
const StyledAccordian = styled.div`
    width: 100%;
    hr {
        color: #555;
        background-color: #555;
        height: 3px;
        border: none;
        width: 95%;
    }
    .accordian {
        width: 100%;
        div {
            display: flex;
            justify-content: center;
            width: 100%;
            .character-details {
                width: 80%;
                text-align: center;
            }
            div {
                display: flex;
                flex-direction: column;
                h4 {
                    font-size: 1.5rem;
                    width: 100%;
                    line-height: 1.5;
                }
            }
        }
    }
`

/**
 * Keys avaiable to character object:
 * birth_year, created, edited, eye_color, films, gender,
 * hair_color, height, homeworld, mass, name, skin_color, 
 * species, starships, url, vehicles
 */

function Accordian(props) {
    const character = props.character
    const birthYear = character.birth_year;
    const eyeColor = character.eye_color;
    const gender = character.gender;
    const hairColor = character.hair_color;
    const height = character.height;
    const mass = character.mass;
    
    return (
        <StyledAccordian className='accordian'>
            <hr/>
            <div>
                <div className='character-details'>
                    <h4>Birth Year: {birthYear}</h4>
                    <h4>Hair Color: {hairColor}</h4> 
                    <h4>Eye Color: {eyeColor}</h4>   
                </div>
                <div className='character-details'>
                    <h4>Gender: {gender}</h4>
                    <h4>Height: {height}</h4>
                    <h4>Mass: {mass}</h4>        
                </div>   
            </div>
        </StyledAccordian>
    )

}

export default function Characters(props) {
    const character = props.character;
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }
    console.log(character); // get rid of this later
    
  return (
    <StyledCharacters className='character-container'>
        <div className='card'>
            <h3>{character.name}</h3>
        </div>
        {(open
            ?<>
                <StyledAccordian open={open}>
                    <Accordian character={character}/>
                </StyledAccordian>
            </>
            : null
        )}
         <div className='expand-btn'>
            <button onClick={toggleOpen}>{(!open?'Expand ▼': 'Collapse ▲')}</button>
        </div>
    </StyledCharacters>
  )
}
