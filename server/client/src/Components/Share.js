import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FileBase64 from "react-file-base64";
import ImageIcon from "@mui/icons-material/Image";
import axios from 'axios';

const Section = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  padding: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  @media only screen and (max-width: 700px) {
    /* border: 1px solid red; */
    width: 90%;
    margin: 0 auto;
}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  
  div{
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
    align-items: flex-start;
    justify-content: center;
  }
  
  h2{
    /* border: 1px solid red; */
    margin-top: 0.6rem;
    margin-bottom: 0rem;
  }
  
  p{
    /* border: 1px solid red; */
    margin: 0;
    margin-bottom: 0.4rem;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  textarea {
    width: 90%;
    margin-bottom: 1rem;
    resize: none;
    font-size: 1.2rem;
    &:focus {
      outline: none;
    }
  }

  button {
    width: 3rem;
    border: none;
    padding: 7px;
    border-radius: 5px;
    background-color: green;
    font-weight: 500;
    margin-right: 20px;
    cursor: pointer;
    color: white;
  }

  button.upload {
    width: 7rem;
  }

  @media only screen and (max-width: 700px) {
    textarea{
      width: 95%;
    }
}
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 700px) {
    display: flex;
    justify-content: space-between;

    button{
    }
}

  @media only screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
`;

const Upload = styled.div`
    display: flex;
    align-items: center;
    svg {
      padding-right: 0.1em;
    }
`;

const Share = () => {
  const [post, setPost] = useState({
    desc: "",
    img: "",
  });

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
  }, []);


  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  } 
  
  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log(post);
    const userData = await JSON.parse(localStorage.getItem("ecogather-user"));
    const { data } = await axios.post("http://localhost:5000/api/posts/post", {
      username: userData.username,
      profilePicture: userData.profilePicture,
      description: post.desc,
      img: post.img,
    });
    // console.log({data});
    console.log("posted");
  };

  return (
    isLoading && <Section>
      <Top>
        <img src={currentUser.profilePicture} alt="user" />
        <div>
        <h2>{currentUser.username}</h2>
        <p>{currentUser.description}</p>
        </div>
      </Top>
      <hr className="shareHr" />~
      <Bottom>
        <form onSubmit={handleSubmit}>
          <textarea
            cols="30"
            rows="4"
            placeholder="Whats in your mind"
            name='desc'
            value={post.desc}
            onChange={(e) => handleChange(e)}
          />
          <Buttons>
            <Upload>
                <ImageIcon />
                <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setPost({ ...post, img: base64 })} />
            </Upload>
            <button type="submit">Post</button>
          </Buttons>
        </form>
      </Bottom>
    </Section>
  );
};

export default Share;
