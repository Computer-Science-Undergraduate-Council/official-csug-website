import React from "react";
import styled from "styled-components";

function NavBar () {

    const BACKGROUND = styled.div`
        width: 100%;
        height: 68px;
        background-color: #6DC3DD;
    `;
    
    const ANCHOR = styled.a`
        color: #292B32;
        text-align: center;
        text-decoration: none;
    `;

    return (
        <BACKGROUND>
            
            <ANCHOR href="">Hello</ANCHOR>
        </BACKGROUND>
    )
}

export default NavBar;