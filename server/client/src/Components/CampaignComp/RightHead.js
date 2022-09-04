import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import useStyles from './FormStyles'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const Section = styled.div`
width: 50%;
  /* background-color: #202020; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  h2 {
    color: rgb(223, 223, 223);
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 0.4rem;
  }
`

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "1px solid #C4C4C4",
    boxShadow: 24,
    p: 4,
  };

const RightHead = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleEventSubmit = () => {
      alert("Hell")
    }
  return (
    <Section>
    <h2>Host Events to bring awareness about our Environment</h2>
    <div onClick={handleOpen} > 
    <Button text="Host Event" />
    </div>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style} className={classes.modal}>
      <h1>Host Events Like Kackathons, Seminars, Workshops to make people aware about our Environment and its conservation</h1>
      <form onSubmit={handleEventSubmit}>
            <h3>Event Name</h3>
            <input type="text" name="" id="" placeholder="Enter Events Name" />
            <h3>Event Image URL</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter an image for the event (URL preferred)"
            />
            <h3>Event Type</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="What Kind of Event is this?"
            />
            <h3>Event Description</h3>
            <textarea
              name=""
              id=""
              placeholder="Specify the Event Description"
            />
            <h3>Event Mode</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="InPerson || Digital || Hybrid"
            />
            <h3>Location</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter the location of Event if InPerson || Hybrid"
            />
            <h3>Event For</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Specify Who's eligible to attend the Event"
            />
            <h3>Event Starts at</h3>
            <div>
              <input type="date" name="" id="" />
              <input type="time" name="" id="" />
            </div>
            <h3>Event Ends at</h3>
            <div>
              <input type="date" name="" id="" />
              <input type="time" name="" id="" />
            </div>
            <h3>Organization Name</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your Organization Name"
            />
            <h3>Discord Link</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter the Event's Discord Link"
            />
            <h3>Any Other Link</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Any other Link you want to share"
            />
            <button type='submit' >Host Event</button>
          </form>
    </Box>
  </Modal>
    </Section>
  )
}

export default RightHead