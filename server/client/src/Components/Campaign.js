import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import ChatRoom from "./ChatComp/ChatRoom/ChatRoom";

const Section = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  content: "";
  display: table;
  clear: both;
`;

const LeftSection = styled.div`
  float: left;
  height: 470px;
  width: 20%;
  padding: 0 10px;
  height: 100%;
  border: 1px solid black;
`;

const RightSection = styled.div`
  float: left;
  height: 470px;
  padding: 0 10px;
  width: 75%;
  height: 100%;
  border: 1px solid black;
`;

const RightDes = styled.div`
  padding: 1rem;
  box-sizing: border-box;

  h2 {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  h4 {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  h5 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  h6 {
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
`;

const Campaign = () => {
  return (
    <>
      <Navbar />
      <Section>
        <LeftSection>
          <RightDes>
            <h2>Upcoming Events</h2>
            <h3>Beach Cleanup</h3>
            <div>
              <h4>Tuesday, 6 September, 2022</h4>
              <h5>12:30 PM to 8:30 PM PST</h5>
            </div>
            <h2>Campaign Details</h2>
            <div>
              <h4>Hosted by John Smith</h4>
              <h5>Location: Santa Monica Beach</h5>
            </div>
            <h2>Members</h2>
            <div>
              <ul>
                <li>John Smith</li>
                <li>Jane Doe</li>
              </ul>
            </div>
          </RightDes>
        </LeftSection>
        <RightSection>
          <ChatRoom />
        </RightSection>
      </Section>
    </>
  );
};

export default Campaign;
