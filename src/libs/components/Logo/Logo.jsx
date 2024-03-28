import React from "react";
import styled from "styled-components";
import logo from "../../features/assets/images/logos/csug_logo_2024.svg";

const LOGO = logo;
const LogoHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Logo() {
    return (
        <LogoHolder>
            <img src={ LOGO } alt= "CSUG Logo" width="36px" height="36px" />
            <p style={{paddingLeft:"5px"}}>Computer Science Undergraduate Council</p>
        </LogoHolder>
    )
}
export default Logo;