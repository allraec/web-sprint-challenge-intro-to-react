// Write your Character component here

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: rgba(36, 32, 56, 0.75);
    padding: 1%;
    width: 50%;
    display: flex;
    margin: 0 25% 0 25%;
    flex-direction: column;
    border: solid 3px black;
    border-radius: 5%;
    color: #e7cfcd;
`

const TextStyle = styled.p`

    color: #9067c6;
    justify-content: center;

`
const NameStyle = styled.h2`

    text-transform: uppercase;
`

const CharSpan = styled.span`

    color: #a5d0a8;
`

const Character = props => {

    return(
        <div>
            <Wrapper>
                <NameStyle>{props.character.name}</NameStyle>
                <TextStyle><CharSpan>Birth Year: </CharSpan>{props.character.birth_year}</TextStyle>
                <TextStyle><CharSpan>Hair Color: </CharSpan>{props.character.hair_color}</TextStyle>
                <TextStyle><CharSpan>Height: </CharSpan>{props.character.height}</TextStyle>
                <TextStyle><CharSpan>Mass: </CharSpan>{props.character.mass}</TextStyle>
                <TextStyle><CharSpan>Skin Color: </CharSpan>{props.character.skin_color}</TextStyle>
                <TextStyle><CharSpan>Eye Color: </CharSpan>{props.character.eye_color}</TextStyle>
            </Wrapper>
        </div>
    )
};

export default Character;