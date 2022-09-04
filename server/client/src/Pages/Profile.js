import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Wallpaper from '../Assets/Wallpaper2.webp'
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import axios from 'axios';

const Section = styled.div`
 width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Wallpaper});
  background-size: 100%;
  /* width: 100vw; */
  /* height: 100vh; */

  h1{
    font-family: "Alex Brush", cursive;
    font-size: 3rem;
    margin-bottom: 2rem;
    /* border: 1px solid black; */
}

form{
    width: 35vw;
    height: auto;
    column-gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  background-color: rgba(256, 256, 256, 0.4);
}

input.input{
        width: 80%;
        height: 50px;
        border-radius: 10px;
        border: 1px solid gray;
        font-size: 18px;
        padding-left: 20px;
        margin-bottom: 1rem;
        
        &:focus{
            outline: none;
        }
    } 

    textarea{
        width: 80%;
        height: 50px;
        border-radius: 10px;
        border: 1px solid gray;
        font-size: 18px;
        padding-left: 20px;
        margin-bottom: 1rem;
        resize: none;
        &:focus{
            outline: none;
        }
    }

    button{
        width: 60%;
        height: 50px;
        border-radius: 10px;
        border: none;
        background-color: #1775ee;
        color: white;
        font-size: 25px;
        font-weight: 500;
        cursor: pointer;
        margin-bottom: 1rem;
        
        a{
            text-decoration: none;
            font-weight: 500;
            color: white
        }
    }
`


const PicInput = styled.div`
width: 80%;
height: auto;
margin-bottom: 1rem;
font-size: 18px;
/* border: 1px solid red; */

h3{
    font-size: 18px;
    margin: 0;
    font-weight: 500;
    /* border: 1px solid red; */
}

`


const Profile = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        profilePicture: "",
        desc: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }  

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log('state:-' + user.desc);
        const userData = await JSON.parse(localStorage.getItem("ecogather-user"));
        const {data} = await axios.post(`http://localhost:5000/api/auth/profile/${userData._id}`, {
            id: userData._id,
            image: user.profilePicture,
            description: user.desc,
        })
        // console.log(data.userData.profilePicture);
        if (true) {
            console.log("Hell");
            userData.profilePicture = data.userData.profilePicture;
            userData.userDescription = data.userData.userDescription;
            localStorage.setItem("ecogather-user", JSON.stringify(userData));
            // navigate("/");
        }
    }
    
  return (
    <Section>    
    <form onSubmit={handleSubmit}>
    <h1>EcoGather</h1>
    <h3>Tell us something about yourself</h3>
    <textarea name="desc" cols="30" rows="10" placeholder='Tell us about yourself' onChange={(e) => handleChange(e)} />
    <PicInput>
    <h3>
    Pick a photo for your profile :-
    </h3>
    <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setUser({ ...user, profilePicture: base64 })} />
    </PicInput>
    <button type="submit">
    Submit
    </button>
    </form>
    </Section>
  )
}

export default Profile