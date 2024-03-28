import React from "react";
import styled from "styled-components";

import Logo from "../Logo/Logo"

function NavBar () {

    const Background = styled.div`
        width: 100%;
        height: 68px;
        background-color: #6DC3DD;
    `;
    
    const Anchor = styled.a`
        color: #292B32;
        text-align: center;
        text-decoration: none;
    `;

    return (
        <Background>
            <Logo />
            <Anchor href="">Hello</Anchor>
        </Background>
    )
}

export default NavBar;