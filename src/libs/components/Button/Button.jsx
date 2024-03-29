import React from 'react';
import styled from "styled-components";

const ButtonShadow = styled.div`
    width: 140px;
    height: 37px;
    border-radius: 32px;
    background-color: #222E60;
    position: relative;
    z-index: 1;
    margin-bottom: 2em;
`
const CustomButton = styled.div`
    width: 140px;
    height: 37px;
    border-radius: 32px;
    display: flex;
    position: relative;
    z-index: 2;
    transform: translate(-5%,85%);
    -webkit-transition: transform .3s ease-in-out;
    align-items: center;
    justify-content: center;
    
    &:hover {
        transform: translate(0%,100%);
        -webkit-transition: transform .3s ease-in-out;
        cursor: pointer;
    }
`
const Anchor = styled.a`
    text-decoration: none;
    color: #222E60;
`

function Button ({
    text,
    color,
    link,
}) {
    return (
        <Anchor href={link} target="_blank">
        <CustomButton style={{backgroundColor: color}}>{text}</CustomButton>
            <ButtonShadow />
        </Anchor> 
    )
}

export default Button;
