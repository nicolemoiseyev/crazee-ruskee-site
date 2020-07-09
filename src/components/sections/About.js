import React from "react"
import styled from "styled-components"
import Icon from "../icons/Icon"

const About = () => {
  return (
    <StyledSection id="about">
      <TextWrapper>
        <h1>About</h1>
      </TextWrapper>
    </StyledSection>
  )
}

export default About

const TextWrapper = styled.div``

const StyledSection = styled.div`
  height: 80vh;
  text-align: left;
  padding: 10rem 0 0 0;
`
