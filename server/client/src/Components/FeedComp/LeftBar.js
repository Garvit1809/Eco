import React, { useState, useEffect } from "react";
import styled from "styled-components";

import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

const Section = styled.div`
  flex: 2.5;
  height: calc(100vh - 50px);
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;

  hr {
    height: 0.7px;
    width: 80%;
  }

  @media only screen and (max-width: 700px) {
    position: relative;
    /* height: fit-content; */
    /* border: 4px solid black; */
    hr{
      margin: 0rem auto;
    }
  }
`;

const Details = styled.div`
  width: 90%;
  min-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  margin-top: 1.25rem;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  /* border: 1px solid red; */

  img {
    width: 85%;
    height: 45%;
    object-fit: cover;
    border-radius: 10px;
  }

  @media only screen and (max-width: 700px) {
    /* min-height: auto; */
    /* height: fit-content; */
    height: 60vh;
    /* border: 4px solid black; */
    img{
      margin-top: 1rem;
      height: 60%;
    }

  }
  
`;

const Credentials = styled.div`
  width: 80%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.4rem;
  /* border: 1px solid black; */

  h4 {
    font-weight: 300;
    font-size: 1.05rem;
  }

  h5 {
    font-weight: 200;
    text-decoration: underline;
  }

  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: row;
    height: auto;
    /* border: 1px solid blue; */
    /* margin-bottom: 2r; */
    h4{
      /* border: 1px solid black; */
      margin: 0 auto;
      font-size: 0.8rem;
    }
    h5{
      /* border: 1px solid black; */
      margin: 0.5rem auto;
      font-size: 0.7rem;
    }
  }
`;

const Info = styled.div`
  width: 80%;
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
  
  @media only screen and (max-width: 700px) {
    min-height: auto;
    padding: 0.4rem auto;
    margin-top: 1rem;
    margin-bottom: 0;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const InfoItem = styled.div`
  height: 2rem;
  
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* border: 1px solid red; */

  svg {
    padding-right: 0.5rem;
  }

  p{
    font-weight: 150;
  }
`;

export default function Sidebar() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    async function fetchUserData() {
      if (localStorage.getItem("ecogather-user")) {
        setCurrentUser(await JSON.parse(localStorage.getItem("ecogather-user")));
        setIsLoading(true)
      }
    }
    fetchUserData();
  }, [])

  return (
    isLoading && <Section>
      <Details>
        <img src={currentUser.profilePicture} alt="user" />
        <Credentials>
          <h4>Credential and Highlights</h4>
          <h5>More</h5>
        </Credentials>
        <hr />
        <Info>
          <InfoItem>
            <PersonIcon />
            <p>{currentUser.username}</p>
          </InfoItem>
        </Info>
      </Details>
    </Section>
  );
}
