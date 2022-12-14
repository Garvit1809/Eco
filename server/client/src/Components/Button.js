import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
&.bn54 {
  position: relative;
  outline: none;
  text-decoration: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  height: 45px;
  width: 130px;
  width: auto;
  padding: 0 1.4rem;
  opacity: 1;
  /* background-color: rgba(0, 0, 0, 0.8); */
  background-color: ${props => props.backgroundColor};
  /* border: 1px solid rgba(0, 0, 0, 0.6); */
  border: none;
}

&.bn54 .bn54span {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  /* color: #ffffff; */
  color: ${props => props.color};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.7px;
}

&.bn54:hover {
  animation: bn54rotate 0.7s ease-in-out both;
}

&.bn54:hover .bn54span {
  animation: bn54storm 0.7s ease-in-out both;
  animation-delay: 0.06s;
}

@keyframes bn54rotate {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }
  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }
  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}

@keyframes bn54storm {
  0% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
  25% {
    transform: translate3d(4px, 0, 0) translateZ(0);
  }
  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0);
  }
  75% {
    transform: translate3d(2px, 0, 0) translateZ(0);
  }
  100% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
}
`

const Button = (props) => {
  return (
  <Btn className="bn54" color={props.color} backgroundColor={props.backgroundColor}  >
    <span className="bn54span">{props.text}</span>
  </Btn>
  )
}

export default Button