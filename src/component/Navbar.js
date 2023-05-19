import React from 'react'
import styled from "styled-components"
const Section =styled.div`
  width: 100%;
  cursor: pointer;
  position: fixed;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  background-color: #39445a;
  font-family: "Montserrat", sans-serif;
  font-size: 5vw;
  padding-bottom: 15px;
  box-shadow: 0px 1px 5px black;
  color: white;
  z-index: 100;
`
const Navbar = () => {
  return (
    <Section onClick={()=> window.scroll(0,0)}>
      🎬 ENTERTAINMENT HUB 🎥
    </Section>
  )
}

export default Navbar
