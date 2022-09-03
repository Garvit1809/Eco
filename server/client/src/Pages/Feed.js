import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import RightBar from "../Components/RightBar";
import CentreBar from "../Components/CentreBar";
import LeftBar from "../Components/FeedComp/LeftBar";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
display: flex;
width: 100%;
min-height: 200vh;

@media only screen and (max-width:700px) {
  display: flex;
  flex-direction: column;
}
`;


const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("ecogather-user")) {
      navigate("/register");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Section>
        <LeftBar />
        <CentreBar />
        <RightBar />
      </Section>
    </>
  );
};

export default Home;
