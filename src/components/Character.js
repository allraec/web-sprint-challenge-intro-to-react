// Write your Character component here
import styled from 'styled-components';
import React from 'react';

const Container = styled.div`

    border-radius: 15%;
    border: 2px solid #653643;
    margin: 0;
    padding: 0;
    width: 35%;
    background: rgba(124, 168, 154, 0.75);
`;
const ImgStyle = styled.img`

    border-radius: 50%;
    border: 5px solid #653643;
    width: 50%;
`;

const H2Style = styled.h2`

    color: #cc3363;
`;

const SpanStyle = styled.span`

    color: #5b2333;
    font-weight: bold;
`;

const Character = ({name, status, species, gender, image, type}) => {

    return (

        <Container>
            <ImgStyle src={image}/>
            <H2Style>{name}</H2Style>
            <p><SpanStyle>Status:</SpanStyle> {status + " - " +species}</p>
            {type && <p><SpanStyle>Type:</SpanStyle> {type}</p>}
            <p><SpanStyle>Gender:</SpanStyle> {gender}</p>
        </Container>

    )

}

export default Character;