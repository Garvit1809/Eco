import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import wallpaper from '../Assets/Wallpaper2.webp'
import wallpaper2 from '../Assets/SocialMedia2.png'
import socialMediaImg from '../Assets/SocailMedia1.webp'
import Button from '../Components/Button'
import event from '../Assets/HomeImg4.jpg'
import subs from '../Assets/Substitute.jpg'

const Section = styled.div`
width: 100%;
height: auto;
/* height: 4rem; */
/* border: 1px solid red; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
overflow: hidden;

`

const First = styled.div`
width: 100vw;
height: calc(100vh - 4rem);
position: relative;

div.image{
  width: 1005%;
  height: 100%;
  background-image: url(${wallpaper});
  background-size: 100vw;
  filter: blur(4px);
  -webkit-filter: blur(4px);
  z-index: 1;
  }

  p{
    font-size: 1.5rem;
    font-weight: 400;
  }
div.text{
  position: absolute;
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
}
`

const Eventss = styled.div`
width: 90vw;
display: flex;
align-items: center;
justify-content: center;

img{
  width: 40%;
  border-radius: 25px;
}

div{
  box-sizing: border-box;
  width: 60%;
  /* border: 1px solid red; */

  p{
    width: 90%;
    padding-left: 2rem;
  }

  button{
    margin-left: 2rem;
    margin-top: 1rem;
  }
}
`

const Campaigns = styled.div`
width: 90vw;
display: flex;
align-items: center;
justify-content: center;

img{
  width: 40%;
  object-fit: contain;
  border-radius: 25px;
}

div{
  box-sizing: border-box;
  width: 60%;
  /* border: 1px solid red; */

  p{
    width: 90%;
    /* padding-left: 2rem; */
  }

  button{
    /* margin-left: 2rem; */
    /* margin-top: 1rem; */
  }
}
`

const Ecofinder = styled.div`
width: 90vw;
display: flex;
align-items: center;
justify-content: center;

img{
  width: 40%;
  object-fit: contain;
  border-radius: 25px;
}

div{
  box-sizing: border-box;
  width: 60%;
  /* border: 1px solid red; */

  p{
    width: 90%;
    padding-left: 2rem;
  }

  button{
    margin-left: 2rem;
    margin-top: 1rem;
  }
}
`


const Home = () => {
  return (
    <>
    <Navbar/>
    <Section>
    <First>
    <div className='image' ></div>
    <div className='text' >
    <p>EcoTogether attempts to address the issue of environmental sustainability through human responsibility. It provides users a social platform where they are able to share resources in order to enact change in their community, and features a tool that helps users find eco-friendly alternatives to commercial products. Through EcoTogether, we aim to bring people together in the environmental movement, and instill hope that it is never too late to save our planet.</p>
    </div>
    </First>
    <Eventss>
     <img src={socialMediaImg} alt="" />
     <div>
     <p>Users can share their contribution to environmental preservation with others. They can post upcoming campaigns and events and can collaborate with each other. The event may be a hackathon, seminar, webinar or a quiz. We imply to aware people through these events so more folks can join in to contribute to environment preservation. 
     </p>
     <Button text="Social"   />
     </div>
     </Eventss>
     <Campaigns>
     <div>
     <p>They also have the ability to start campaigns and events. Other users can join these campaigns by donating in order to support the specified cause or meeting up at scheduled clean up sites. As for events, users are able to organize hackathons, seminars, and contests to spread environmental awareness.</p>
     <Button text="Events" color="#ffffff" backgroundColor="rgba(0,0,0,0.8)"/>
     </div>
     <img src={event} alt="" />
     </Campaigns>
     <Ecofinder>
     <img src={subs} alt="" />
     <div>
     <p>This page helps users to find eco-friendly products instead of commercial ones. For example, if the user wants to find a toothbrush, then it will give search results of environment friendly toothbrush substitutes.</p>
     <Button text="EcoFinder" />
     </div>
     </Ecofinder>
    </Section>
    </>
  )
}

export default Home