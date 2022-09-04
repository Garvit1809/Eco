import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import img1 from "../Assets/EventImg3.jpg";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FaDiscord } from 'react-icons/fa'
import { BsLink } from 'react-icons/bs'

const Section = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  /* border: 1px solid red; */
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

const BackgroundDiv = styled.div`
  background-color: rgba(28,83,158,255);
  position: absolute;
  top: 0;
  width: 100%;
  height: 50vh;
`;

const EventDescription = styled.div`
  width: 80%;
  border-radius: 10px;
  min-height: 100vh;
  border: 1px solid #DADADA;
  z-index: 10;
  margin-top: 3rem;
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 50vh;
`;

const LeftHeader = styled.div`
  width: 70%;
  border-top-left-radius: 10px;
  display: flex;
  /* border: 1px solid red; */
  background-color: rgba(235,249,245,255);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;

const RightHeader = styled.div`
  /* border: 1px solid black; */
  width: 30%;
  box-sizing: border-box;
  position: relative;
  
  header{
    padding: 1rem;
    h2{
      font-size: 2rem;
      font-weight: 600;
    }
    h6{
      font-size: 0.8rem;
      color: grey;
      font-weight: 400;
      margin-bottom: 1rem;
    }
  }

  footer{
    /* border: 1px solid black; */
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    color: white;
    font-weight: 600;
    background-color: rgba(28,83,158,255);
    font-size: 1.4rem;
  }
`;

const Schedule = styled.div`
/* border: 1px solid red; */
display: flex;
align-items: center;
margin-bottom: 1rem;

svg{
  fill: #1c539e;
  /* border: 1px solid red; */
  border-radius: 50%;
  padding: 0.4rem;
  background-color: rgba(240,250,254,255);
  margin-right: 0.5rem;
}

h4{
  font-weight: 500;
  margin-bottom: 0.2rem;
}

h5{
font-weight: 400;
}
`

const Description = styled.div`
display: flex;
`

const LeftDesc = styled.div`
width: 70%;
box-sizing: border-box;
padding-left: 2rem;


h2.start{
  margin-top: 1rem;
}

h2{
  color: rgba(33,37,41,255);
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

h4{
  font-weight: 400;
  width: 90%;
/* border: 1px solid red; */
  margin-bottom: 1rem;
}


`

const RightDes = styled.div`
width: 30%;
padding: 1rem;
box-sizing: border-box;
/* border: 1px solid red; */

h2{
margin-bottom: 1rem;
}

img{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
}

h5{
  font-size: 1.2rem;
  font-weight: 500;
}

h6{
  font-size: 0.9rem;
  font-weight: 400;
  
  span{
    color: blue;
    font-weight: 600;
  }
}

`

const Host = styled.div`
display: flex;
align-items: center;
`

const Attend = styled.div`
width: 85%;
display: flex;
flex-wrap: wrap;
margin-bottom: 0.6rem;
/* display: grid; */
/* grid-template-columns: auto auto auto; */

div{
border: 1px solid #edf0f5;
width: fit-content;
padding: 0.2rem 1rem;
border-radius: 10px;
margin-right: 1rem;
margin-bottom: 0.6rem;
background-color: #f0fafe;
}
`

const ImageContainer = styled.div`
width: 31.6vw;
border-top-left-radius: 10px;
/* border: 1px solid red; */

img {
    border-top-left-radius: 10px;
    width: 100%;
    height: 100%;

    /* object-fit: cover; */
  }

`

const Container = styled.div`
    width: 24.4vw;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    

    header {
      /* border: 1px solid red; */
      margin-top: 2rem;
      width: 70%;
      margin-bottom: 7rem;

      h1 {
        font-size: 2.5rem;
        color: #0e2e4d;
        font-weight: 700;
        line-height: 2.7rem;
        margin-bottom: 0.5rem;
      }
      
      h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: rgba(23,54,82,255);
      }
    }

    footer {
      position: absolute;
      bottom: 0;
      /* border: 1px solid red; */
      margin-bottom: 1rem;
      
      h2{
        font-size: 1.2rem;
        color: rgba(23,54,82,255);
        font-weight: 500;
      }
      
      span{
        color: #0e2e4d;
        font-size: 1.8rem;
        font-weight: 700;
        
      }
    }
`

const Links = styled.div`
/* border: 1px solid red; */
box-sizing: border-box;
margin-left: 1rem;

svg{
  width: 40px;
  height: 40px;
  fill: #1c539e;
  margin-right: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
}
`

const Event = () => {

  const [user, setuser] = useState({})

  useEffect(() => {
    async function fetchUser() {
      const userData = await JSON.parse(localStorage.getItem("ecogather-user"));
      setuser(userData)
      console.log(userData);
    }
    fetchUser()
  }, [])
  
  return (
    <>
      <Navbar />
      <Section>
        <BackgroundDiv />
        <EventDescription>
          <Header>
            <LeftHeader>
            <ImageContainer>
            <img src={img1} alt="eventimg" />
            </ImageContainer>
              <Container>
                <header>
                  <h1>ART on CLIMATE</h1>
                  <h2>Sept 19th-21st, 2022</h2>
                </header>
                <footer>
                  <h2>Hosted by <span>MLH</span></h2>
                </footer>
              </Container>
            </LeftHeader>
            <RightHeader>
              <header>
                <h2>Art on Climate</h2>
                <h6>Hosted by MLH</h6>
                <Schedule>
                <AccessTimeIcon/>
                <div>
                <h4>Tuesday, 19 Sept, 2022</h4>
                <h5>8:30PM to Sep 21, 6:30PM IST</h5>
                </div>
                </Schedule>
                <Schedule>
                <LocationOnIcon/>
                <h4>Event is hosted online/digital</h4>
                </Schedule>
              </header>
              <footer>Register Here</footer>
            </RightHeader>
          </Header>
          <Description>
            <LeftDesc>
                <h2 className="start" >Event Description</h2>
                <h4>We have come with an exciting event for you, Art on Climate. Join us and learn how you can conserve environment and how human activities are affecting climate. Here, we are having a workshop as well, MS Paint Workshop giving opportunity to show your creativity and art. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni!</h4>
                <h2>Who can attend?</h2>
                <h4>Locations have different requirements for who can attend. This location is open to the following:
                </h4>
                <Attend>
                <div>
                Minors(between 13-19)
                </div>
                <div>
                College Students
                </div>
                <div>
                Working Professionals
                </div>
                <div>
                Graduates
                </div>
                <div>
                Non Coders
                </div>
                </Attend>
                <h2>Links</h2>
                <Links>
                <FaDiscord/>
                <BsLink/>
                </Links>
            </LeftDesc>
            <RightDes>
                <h2>Hosted By</h2>
                <Host>
                    <img src={user.profilePicture} alt="" />
                    <div>
                    <h5>{user.username}</h5>
                    <h6>From <span>MLH</span></h6>
                    </div>
                </Host>
            </RightDes>
          </Description>
        </EventDescription>
      </Section>
    </>
  );
};

export default Event;
