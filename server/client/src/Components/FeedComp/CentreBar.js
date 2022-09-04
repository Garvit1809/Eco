import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Post from "../Post";
import Share from "../Share";
import axios from "axios";

const Section = styled.div`
  flex: 5.5;
  padding: 20px;
`;

const AllPosts = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column-reverse;
  height: auto;
`;

const CentreBar = () => {
  const [posts, setPosts] = useState([]);
//   const [currentUser, setCurrentUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (localStorage.getItem("ecogather-user")) {
        const { data } = await axios.get(
          "http://localhost:5000/api/posts/post"
        );
        // console.log(data.data.postMessages);
        setPosts(data.data.postMessages);
        setIsLoading(true);
      }
    }
    fetchData();
  }, []);

  return (
    isLoading && (
      <Section>
        <Share />
        <AllPosts>
          {posts.map((post, index) => (
            <Post key={index} post={post}/>
          ))}
        </AllPosts>
      </Section>
    )
  );
};

export default CentreBar;
