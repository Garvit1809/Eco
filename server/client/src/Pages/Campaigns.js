import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import { campaigns } from './CampaignData'

const Section = styled.div`
width: 100%;
margin-top: 2rem;
/* height: auto; */
min-height: calc(100vh - 4rem);
/* border: 1px solid re; */

display: grid;
grid-template-columns: auto auto auto auto;

`

const CampaignDesc = styled.div`
/* border: 1px solid black; */
width: 86%;
margin: 0 auto;
margin-bottom: 2.5rem;
border-radius: 10px;

-webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transition: all 0.2s ease;


&:hover{
  transform: translateY(-3%) scale(1.05);

}

img{
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

button{
  margin-bottom: 1rem;
}
`

const Campaigns = () => {

  const navigate = useNavigate()
  const handleCampaignClick = () => {
    navigate("/campaigns/id")
  }
  return (
    <>
    <Navbar/>
    <Section>
    {
      campaigns.map(campaign => {
        return (
          <CampaignDesc>
          <img src={campaign.image} alt="" />
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
          <button onClick={handleCampaignClick} >Join Campaign</button>
          </CampaignDesc>
        )
      })
    }
    </Section>
    </>
  )
}

export default Campaigns