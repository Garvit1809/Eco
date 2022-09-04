import React, { useState } from 'react';
import styled from 'styled-components';

import axios from "axios";
import Navbar from '../Components/Navbar';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';

const Section = styled.div`
 width: 100%;
  min-height: calc(100vh - 4rem);
  /* border: 1px solid red; */
  /* position: absolute; */

  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    margin-top: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

input{
    border-radius: 25px;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    padding: 0.4rem 1rem;
    border: 1px solid #DADADA;
    color: grey;
    /* border: black; */

    &:focus{
        outline: none; 
    }
  }

  div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
`

const Results = styled.div`
/* border: 1px solid red; */
display: flex;
flex-direction: column;
align-items: center;
/* width: 60vw; */
`

const Result = styled.div`
/* border: 1px solid red; */
margin-bottom: 1rem;

`

const Substitute = () => {

    const [query, setQuery] = useState('')
    const [data, setdata] = useState([])

    const options = {
        method: 'GET',
        url: `https://google-search3.p.rapidapi.com/api/v1/search/q=environment+friendly+substitute+of+${query}`,
        headers: {
          'X-User-Agent': 'desktop',
          'X-Proxy-Location': 'EU',
          'X-RapidAPI-Key': '833c0ed77fmsh82165c268694adep11a25djsn847436b4e106',
          'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.request(options).then(function (response) {
            console.log(response.data.results);
            setdata(response.data.results)
        }).catch(function (error) {
            console.error(error);
        });
    }

    const sliceURL = (url) => {
      // let url = props.URL;
      if (url.startsWith("http:")) {
        url = url.slice(5);
        return url;
      } else {
        url = url.slice(6);
        return url;
      }
    };

  return (
    <>
    <Navbar/>
    <Section>
    <h1>Find eco-friendly products instead of commercial ones.</h1>
    <form onSubmit={handleSubmit}>
    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
    <div>
    <Button text="Search" />
    </div>
    </form>
    <Results>
    {
        data ? 
        data.map(ele => {
            return(
                <Result>
                <Link to={sliceURL(ele.link)} target="_blank"  >
                {ele.title}
                </Link>
                </Result>
            )
        }): null
    }
    </Results>
    </Section>
    </>
  )
}

export default Substitute


