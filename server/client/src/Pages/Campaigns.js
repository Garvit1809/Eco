import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Components/Button'
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

const Header = styled.header`

margin-top: 1rem;
display: flex;
align-items: center;
justify-content: center;

`

const LeftHead = styled.div`
width:50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
/* background-color: rgb(243,243,243); */
/* border-radius: 10px; */
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;

h2{
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0.4rem;
}
/* border: 1px solid red; */
`

const RightHead = styled.div`
width: 50%;
/* background-color: #202020; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;

h2{
  color:  rgb(223,223,223);;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0.4rem;
}
`

const Campaigns = () => {

  const navigate = useNavigate()
  const handleCampaignClick = (type) => {
    if (type === 'Campaign') {
      navigate("/campaigns/id")
    } else {
      navigate("/campaigns/event")
    }
  }
  return (
    <>
    <Navbar/>
    <Header>
    <LeftHead>
    <h2>Start a Campaign to Clean the Environment</h2>
    <Button text="Campaign" color="#ffffff" backgroundColor="rgba(0,0,0,0.8)" />
    </LeftHead>
    <RightHead>
    <h2>Host Events to bring awareness about our Environment</h2>
    <Button text="Event"/>
    </RightHead>
    </Header>
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
          <h4>
          {campaign.type}
          </h4>
          <button onClick={() => handleCampaignClick(campaign.type)} >Join {campaign.type}</button>
          </CampaignDesc>
        )
      })
    }
    </Section>
    </>
  )
}

export default Campaigns