import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import { campaigns } from "./CampaignData";
import LeftHead from "../Components/CampaignComp/LeftHead";
import RightHead from "../Components/CampaignComp/RightHead";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import { MdPeopleAlt, MdAttachMoney } from 'react-icons/md'
// import { MdAttachMoney } from 'r'

const Section = styled.div`
  width: 100%;
  margin-top: 2rem;
  min-height: calc(100vh - 4rem);
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

const Header = styled.header`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CampaignDesc = styled.div`
  width: 86%;
  margin: 0 auto;
  margin-bottom: 2.5rem;
  border-radius: 10px;
  background-color: white;

  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3%) scale(1.05);
  }

  button {
    margin-bottom: 1rem;
  }
`;

const ImageContainer = styled.div`
  width: 21.5vw;
  height: 35vh;
  /* border: 1px solid red; */
  margin-bottom: 0.5rem;

  img {
    width: 100%;
    /* border: 1px solid red; */
    height: 100%;
    border-radius: 10px;
    /* position: relative; */
    /* z-index: 1; */
  }
`;


const Content = styled.div`
  /* border: 1px solid red; */

  h3,
  h4,h2 {
    margin-left: 0.8rem;
  }

  h2{
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
  }

  h3 {
    /* color: grey; */
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.2rem;
    display: flex;
    align-items: center;

    svg{
      width: 16px;
      height: 16px;
      fill: grey;
    }
  }

  h4.desc {
    /* color: #DADADA; */
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 0.2rem;
  }

  h4.members {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.2rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    span {
      color: orange;
      font-weight: 600;
    }

    svg{
      width: 16px;
      height: 16px;
      fill: grey;
      margin-right: 0.2rem;
    }
  }

  h4.raised {
    margin-bottom: 0.2rem;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    span {
      color: orange;
      font-weight: 600;
    }

    svg{
      width: 16px;
      height: 16px;
      fill: grey;
      margin-right: -0.1rem;
    }
  }

  div{
    margin-bottom: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Campaigns = () => {
  const navigate = useNavigate();
  const handleCampaignClick = (type) => {
    if (type === "Campaign") {
      navigate("/campaigns/id");
    } else {
      navigate("/campaigns/event");
    }
  };
  return (
    <>
      <Navbar />
      <Header>
        <LeftHead/>
        <RightHead/>
      </Header>
      <Section>
        {campaigns.map((campaign) => {
          return (
            <CampaignDesc>
              <ImageContainer>
                <img src={campaign.image} alt="" />
              </ImageContainer>
              <Content>
                <h2>{campaign.name}</h2>
                <h3><LocationOnIcon/> {campaign.Location}</h3>
                <h4 className="desc">{campaign.description}</h4>
                <h4 className="members">
                  <MdPeopleAlt/> <span>{campaign.members}</span>
                </h4>
                </div>
              </Content>
              <div onClick={() => handleCampaignClick(campaign.type)}>
                {campaign.type === "Campaign" ? (
                  <Button
                    text={`Join ${campaign.type}`}
                    color="#ffffff"
                    backgroundColor="rgba(0,0,0,0.8)"
                  />
                ) : (
                  <Button text={`Join ${campaign.type}`} />
                )}
              </div>
            </CampaignDesc>
          );
        })}
      </Section>
    </>
  );
};

export default Campaigns;
