import React from 'react';
import { Segment, Button, Icon } from "semantic-ui-react";
// import {Tab, Tabs, Tablist, TabPanel } from "react-tabs";
import { NavLink } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

export const Header = () =>(
    <Segment 
    style={{
        width: "100%",
        borderTop: "2px solid #3e6af9",
        borderBottom: "2px solid #3e6af9",
        borderRight: "2px solid silver",
        borderLeft: "2px solid silver",
        display: "flexbox",
        // alignSelf: "start",
        fontFamily: "sans-serif",
        height: "100%",
        fontSize: "20px",
        backgroundColor: "silver",
        padding: "1%"
    }}
    > 
    <strong> 
        DIY Smart Mirror Display
    </strong>
    <NavLink to="/Home" >
    <Button animated color="black"
    style={{
        marginLeft: "60%",
    }}
    >
    <Button.Content visible>Home</Button.Content>
    <Button.Content hidden><Icon name="home"></Icon></Button.Content>
    </Button>
    </NavLink>
    <NavLink to="/About" >
    <Button animated color="black"
    style={{
        marginLeft: "1%",
    }}
    >
    <Button.Content visible>About</Button.Content>
    <Button.Content hidden><Icon name="radio"></Icon></Button.Content>
    </Button>
    </NavLink>
    <NavLink to="/data">
    <Button animated color="blue" style={{
        marginLeft: "1%",
    }}>
    <Button.Content visible>Data</Button.Content>
    <Button.Content hidden><Icon name="file outline"></Icon></Button.Content>
    </Button>
    </NavLink>
    <Icon style={{
        marginLeft: "1%",
    }} name="mixcloud" size="big"> </Icon> 
    </Segment>
)