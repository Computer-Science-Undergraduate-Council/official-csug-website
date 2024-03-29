import React from "react";
import styled from "styled-components";

import Logo from "../Logo/Logo";
import Button from "../Button/Button";

function NavBar () {

    const Background = styled.div`
        width: 100%;
        height: 68px;
        background-color: #6DC3DD;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `;
    
    const Anchor = styled.a`
        color: #292B32;
        text-align: center;
        text-decoration: none;
    `;

    const AnchorHolder = styled.div`
        display: flex;
        gap: 3em;
    `
    
    const LogoHolder = styled.div`
        padding-left: 3em;
    `

    const ButtonHolder = styled.div`
        padding-right: 3em;
    `

    return (
        <Background>
            <LogoHolder>
                <Logo />
            </LogoHolder>
            <AnchorHolder>
                <Anchor href="/Home">Home</Anchor>
                <Anchor href="/Tutoring">Tutoring</Anchor>
                <Anchor href="/Contact">Contact</Anchor>
                <Anchor href="/Mascot">Mascot</Anchor>
            </AnchorHolder>
            <ButtonHolder>
                <Button text="Join" color="#F2DC10" link="https://www.google.com"/>
            </ButtonHolder>
            
        </Background>
    )
}

export default NavBar;