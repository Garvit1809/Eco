import React, { useState } from 'react';
import styled from 'styled-components';

import axios from "axios";
import Navbar from '../Components/Navbar';
import Button from '../Components/Button';

const Section = styled.div`
 width: 100%;
  min-height: calc(100vh - 4rem);
  /* border: 1px solid red; */
  /* position: absolute; */

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Substitute = () => {

    const [query, setQuery] = useState('')

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
        // alert(query
        e.preventDefault()
        const data = axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        console.log(data);
    }

  return (
    <>
    <Navbar/>
    <Section>
    <h1>Find eco-friendly products instead of commercial ones.</h1>
    <form onSubmit={handleSubmit}>
    <input type="text" name="" id="" value={query} onChange={(e) => setQuery(e.target.value)} />
    <Button text="Search" />
    </form>
    </Section>
    </>
  )
}

export default Substitute



