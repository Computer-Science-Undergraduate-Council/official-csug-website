import React from "react";
import styled from "styled-components";
import logo from "../../features/assets/images/logos/csug_logo_2024.svg";

const LOGO = logo;
const LogoHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Name = styled.p`
    padding-left: 5px;

`;

function Logo() {
    return (
        <LogoHolder>
            <img src={ LOGO } alt= "CSUG Logo" width="50px" height="50px" />
            <Name>Computer Science Undergraduate Council</Name>
        </LogoHolder>
    )
}
export default Logo;