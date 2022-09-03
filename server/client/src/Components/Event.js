import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import img1 from "../Assets/CleaningImg1.webp";

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
  background-color: purple;
  position: absolute;
  top: 0;
  width: 100%;
  height: 60vh;
`;

const EventDescription = styled.div`
  width: 80%;
  border-radius: 10px;
  min-height: 100vh;
  border: 1px solid black;
  z-index: 10;
  margin-top: 3rem;
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 50vh;
  border: 1px solid black;
`;

const LeftHeader = styled.div`
  width: 70%;
  border-top-left-radius: 10px;
  /* border: 1px solid red; */
  display: flex;
  background-color: aliceblue;
  
  img {
    border-top-left-radius: 10px;
    width: 50%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  div {
    width: 50%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    header {
      border: 1px solid red;
      margin-top: 2rem;
      width: 70%;
      margin-bottom: 7rem;
      h1 {
        font-size: 2.5rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }

    footer {
      position: absolute;
      bottom: 0;
      /* border: 1px solid red; */
      margin-bottom: 1rem;
    }
  }
`;

const RightHeader = styled.div`
  border: 1px solid black;
  width: 30%;

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;

const Description = styled.div`
display: flex;
`

const LeftDesc = styled.div`
width: 70%;
border: 1px solid red;
`

const RightDes = styled.div`
width: 30%;

`

const Attend = styled.div``

const Event = () => {
  return (
    <>
      <Navbar />
      <Section>
        <BackgroundDiv />
        <EventDescription>
          <Header>
            <LeftHeader>
              <img src={img1} alt="" />
              <div>
                <header>
                  <h1>Hack Girl Summer 3</h1>
                  <h2>Aug 19th-21st, 2022</h2>
                </header>
                <footer>
                  <h2>Hosted by AuthorityName</h2>
                </footer>
              </div>
            </LeftHeader>
            <RightHeader>
              <header>
                <h2>Event Name</h2>
                <h6>Hosted by AuthorityName</h6>
                <h4>Starting Day</h4>
                <h5>Timings</h5>
                <h4>Event is hosted Location</h4>
              </header>
              <footer>Register Here</footer>
            </RightHeader>
          </Header>
          <Description>
            <LeftDesc>
                <h2>Event Description</h2>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quibusdam velit qui eius accusamus vero minima ipsum nobis, non consectetur dicta alias aspernatur! Amet quo ducimus aperiam. Ipsam labore esse temporibus necessitatibus hic, velit possimus ipsum obcaecati, voluptate asperiores animi illum mollitia. Nihil exercitationem quod saepe, numquam quae possimus dolorem.</h4>
                <h2>Who can attend?</h2>
                <h4>Locations have different requirements for who can attend. This location is open to the following:
                </h4>
                <Attend>
                </Attend>
                <h2>Links</h2>
            </LeftDesc>
            <RightDes>
                <h2>Hosted By</h2>
                <div>
                    <img src="" alt="" />
                    <h5>Sashrika Kaur</h5>
                    <h6>From Organization Name</h6>
                </div>
            </RightDes>
          </Description>
        </EventDescription>
      </Section>
    </>
  );
};

export default Event;
