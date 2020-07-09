import React from "react"
import styled from "styled-components"
import Button from "../tools/Button"
import Icon from "../icons/Icon"

const Home = () => {
  return (
    <StyledHome id="home">
      <TextWrapper>
        <h1>I'm Lucas and I build things.</h1>
        <Description>
          I’m a resourceful engineer who likes to challenge himself to make a
          lot out of little.
        </Description>
        <Button> Resume </Button>
        <IconGroup>
          <Icon type="mail" />
          <Icon type="linkedin" /> <Icon type="github" />
        </IconGroup>
      </TextWrapper>
    </StyledHome>
  )
}

export default Home

const TextWrapper = styled.div``

const StyledHome = styled.div`
  height: 80vh;
  text-align: left;
  align-items: center;
  display: flex;
  padding-bottom: 5rem;
`

const Description = styled.div`
  padding: 3rem 0;
  font-size: 2rem;
  line-height: 3rem;
  max-width: 40rem;
`

const IconGroup = styled.span`
  padding: 0 2rem;
`
