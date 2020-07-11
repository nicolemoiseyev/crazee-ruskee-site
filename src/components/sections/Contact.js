import React from "react"
import styled from "styled-components"
import Icon from "../icons/Icon"

const Contact = () => {
  return (
    <StyledSection id="contact">
      <TextWrapper>
        <h1>Contact me</h1>
      </TextWrapper>
    </StyledSection>
  )
}

export default Contact

const TextWrapper = styled.div``

const StyledSection = styled.div`
  min-height: 90vh;
  text-align: left;
  padding: 10rem 0 0 0;
`
