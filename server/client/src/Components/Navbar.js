import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Section = styled.div`
width: 100%;
height: 4rem;

border-bottom: 1px solid red;
display: flex;
align-items: center;
justify-content: space-between;

`

const Heading = styled.h1`

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