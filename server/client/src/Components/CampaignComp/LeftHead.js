import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import useStyles from './FormStyles'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const Section = styled.div`
width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* background-color: rgb(243,243,243); */
  /* border-radius: 10px; */
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  h2 {
    color: rgba(0, 0, 0, 0.8);
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

const LeftHead = () => {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitCampaign = () => {
    alert("Created Campaign")
  }

  return (
    <Section>
    <h2>Start a Campaign to Clean the Environment</h2>
    <div onClick={handleOpen}>
    <Button
    text="Start Campaign"
    color="#ffffff"
    backgroundColor="rgba(0,0,0,0.8)"
    />
    </div>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style} className={classes.modal}>
      <h1>Create a Campaign so more people can get involved and help in cleaning our Environment</h1>
      <form onSubmit={handleSubmitCampaign} >
        <h3>Campaign Name</h3>
        <input type="text" name="" placeholder="Enter Events Name" />
        <h3>Campaign Image</h3>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter an image for the event (URL preferred)"
        />
        <h3>Campaign Description</h3>
        <textarea
          name=""
          id=""
          placeholder="Specify the Event Description"
        />
        <h3>Location</h3>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter the location of Event if InPerson || Hybrid"
        />
        <button type='submit' >Start Campaign</button>
      </form>
    </Box>
  </Modal>
    </Section>
  )
}

export default LeftHead