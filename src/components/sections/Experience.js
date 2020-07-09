import React from "react"
import styled from "styled-components"
import Icon from "../icons/Icon"

const Experience = () => {
  return (
    <StyledSection id="experience">
      <TextWrapper>
        <h1>Experience</h1>
      </TextWrapper>
    </StyledSection>
  )
}

export default Experience

const TextWrapper = styled.div``

const StyledSection = styled.div`
  height: 80vh;
  text-align: left;
  padding: 10rem 0 0 0;
`
