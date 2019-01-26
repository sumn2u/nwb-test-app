import React, { Component } from 'react';
import styled from 'styled-components'

const Home = ({ txt }) => {

    const HelloWorld = styled.div`
    color: ${txt == 'of course it works' ? 'green' : 'red'};
    font-size: 18px;
    border: solid 2px black;
    padding: 20px;
    margin-top: 20px;
    `

    return <HelloWorld>{txt}</HelloWorld>;
};

export default Home;
