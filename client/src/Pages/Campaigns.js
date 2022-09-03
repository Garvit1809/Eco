import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import { campaigns } from './CampaignData'

const Section = styled.div`
width: 100%;
/* height: auto; */
min-height: calc(100vh - 4rem);
/* border: 1px solid re; */

display: grid;
grid-template-columns: auto auto auto;

`

const CampaignDesc = styled.div`
border: 1px solid black;
width: 90%;
margin: 0 auto;
margin-bottom: 2rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Campaigns = () => {
  return (
    <>
    <Navbar/>
    <Section>
    {
      campaigns.map(campaign => {
        return (
          <CampaignDesc>
          <h3>
          {campaign.Location}
          </h3>
          <h4>
          {campaign.description}
          </h4>
          <h4>
          {campaign.donation}
          </h4>
          <h4>
          {campaign.name}
          </h4>
          <h4>
          {campaign.members}
          </h4>
          </CampaignDesc>
        )
      })
    }
    </Section>
    </>
  )
}

export default Campaigns