import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const Section = styled.div`
width: 50%;
  /* background-color: #202020; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  h2 {
    color: rgb(223, 223, 223);
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 0.4rem;
  }
`

const RightHead = () => {
  return (
    <Section>
    <h2>Host Events to bring awareness about our Environment</h2>
    <Button text="Host Event" />
    </Section>
  )
}

export default RightHead