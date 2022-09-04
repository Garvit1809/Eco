import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Navbar from "./Navbar";
import ChatRoom from "../Components/ChatComp/ChatRoom";

const Section = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  border: 1px solid red;
`;

const LeftSection = styled.div`
  width: 20%;
  height: 100%;
  border: 1px solid black;
`;

class Campaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaign: {},
    };
  }

  componentDidMount() {
    console.log("Print id: " + this.props.match.params.id);
    axios
      .get(`/${this.props.match.params.id}`)
      .then((res) => {
        console.log("API-response: " + res.data);
        this.setState({
          campaign: res.data,
        });
      })
      .catch((err) => {
        console.log(`Campaign Error: ${err}`);
      });
  }

  render() {
    const campaign = this.state.campaign;
    const chat = campaign.chat;

    return (
      <>
        <Navbar />
        <Section>
          <LeftSection>
            <h2>Upcoming Events</h2>
            <h2>Campaign Details</h2>
            <h2>Members</h2>
          </LeftSection>
          <ChatRoom chat={chat} />
        </Section>
      </>
    );
  }
}

export default Campaign;
