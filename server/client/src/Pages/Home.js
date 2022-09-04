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
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti excepturi doloribus in maxime atque quae exercitationem nesciunt aspernatur debitis dicta.</p>
    </div>
    </First>
    <Eventss>
     <img src={socialMediaImg} alt="" />
     <div>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem at ab error corrupti qui, reiciendis recusandae nobis. Laborum ad velit maxime pariatur voluptatem, autem quibusdam eveniet corrupti similique placeat exercitationem?</p>
     <Button text="Social"   />
     </div>
     </Eventss>
     <Campaigns>
     <div>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, expedita ipsum eos fugit perspiciatis deleniti debitis vero accusantium eveniet praesentium consequatur magni temporibus libero delectus amet earum? Illum, quam labore?</p>
     <Button text="Events" color="#ffffff" backgroundColor="rgba(0,0,0,0.8)"/>
     </div>
     <img src={event} alt="" />
     </Campaigns>
     <Ecofinder>
     <img src={subs} alt="" />
     <div>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facere architecto, animi rerum labore corporis explicabo consequatur non, cum aliquam sit natus consectetur esse nostrum libero, culpa fugit eius quidem?</p>
     <Button text="EcoFinder" />
     </div>
     </Ecofinder>
    </Section>
    </>
  )
}

export default Home