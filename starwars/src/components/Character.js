// Write your Character component here

import React from 'react';
//import styled from 'styled-components';

const Character = props => {

    return(
        <div>
            <h2>{props.character.name}</h2>
            <p>{props.character.birth_year}</p>
        </div>
    )
};

export default Character;