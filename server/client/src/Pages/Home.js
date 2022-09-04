import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'

const Section = styled.div`
width: 100%;
/* height: 4rem; */
/* border: 1px solid red; */
display: flex;
align-items: center;
justify-content: space-between;

`

const First = styled.div`

`


const Home = () => {
  return (
    <>
    <Navbar/>
    <Section>
    <First>
        
    </First>
    </Section>
    </>
  )
}

export default Home