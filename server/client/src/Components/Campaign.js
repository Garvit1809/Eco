import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
width: 100%;
height: calc(100vh - 4rem);
border: 1px solid red;
`

const LeftSection = styled.div`
width: 20%;
height: 100%;
border: 1px solid black;
`

const Campaign = () => {
  return (
    <>
    <Navbar/>
    <Section>
    <LeftSection>
    <h2>Upcoming Events</h2>
    <h2>Campaign Details</h2>
    <h2>Members</h2>
    </LeftSection>
    </Section>
    </>
  )
}

export default Campaign