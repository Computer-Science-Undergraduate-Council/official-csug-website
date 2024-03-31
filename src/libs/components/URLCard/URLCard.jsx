import React from 'react';
import styled from "styled-components";

const Card = styled.a`
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: white;
    border-radius: 7px;
    margin: auto;
    width: 475px;
    height: 150px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    overflow: hidden;

    &:hover {
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
    
`;

const TextArea = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`;

const Title = styled.p`
    color: black;
    font-weight: bold;
    font-size: 20px;
    margin:0px;
    margin-bottom: 12px;

`;

const Link = styled.p`
    color: black;
    font-style: italic;
    margin: 0px;
    padding: 0px;    
`;

const Image = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-right: 25px;
    margin-left: 25px;
`;


function URLCard ({
    image,
    text,
    link,
}){

    return (
        <Card href={link} target="_blank">
            <Image src={image} alt="" />
            <TextArea>
                <Title>{text}</Title>
                <Link>{link}</Link>
            </TextArea>
        </Card>
    )
}

export default URLCard;