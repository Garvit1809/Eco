import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Section = styled.div`
width: 100%;
height: 4rem;
background-color: #ffffff;
z-index: 100;
box-sizing: border-box;
/* border-bottom: 1px solid red; */
-webkit-box-shadow: 0px 10px 10px 2px rgba(0,0,0,0.4);
-moz-box-shadow: 0px 10px 10px 2px rgba(0,0,0,0.4);
box-shadow: 0px 10px 10px 2px rgba(0,0,0,0.4);
position: sticky;
top: 0;
display: flex;
align-items: center;
justify-content: space-between;

`

const Heading = styled.h1`
margin-left: 4rem;
font-weight: 400;
transition: all 0.2s ease;
text-shadow: 2px 2px 30px rgba(0, 255, 71, 1);
&:hover{
  /* transform: scale(); */
}
`

const Menu = styled.ul`
display: flex;
list-style: none;
margin-right: 5rem;
`

const MenuItem = styled.li`
margin-right: 1.5rem;
font-size: 1.2rem;
cursor: pointer;
height: 4rem;
display: flex;
align-items: center;
justify-content: center;
padding: 0 0.5rem;
transition: all 0.2s ease;

&:hover{
  text-shadow: -1px 1px 19px rgba(0, 255, 0, 1);
}
`

const Navbar = () => {
  return (
    <Section>
    <Heading>EcoTogether</Heading>
    <Menu>
    <MenuItem>
    <Link to="/">Home</Link>
    </MenuItem>
    <MenuItem><Link to="/feed" >Post</Link></MenuItem>
    <MenuItem><Link to="/campaigns" >Campaign</Link></MenuItem>
    <MenuItem>Ishwarya🥴</MenuItem>
    </Menu>
    </Section>
  )
}

export default Navbar