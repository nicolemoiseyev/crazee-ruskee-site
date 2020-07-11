import React from "react"
import styled from "styled-components"
import Button from "../tools/Button"
import Icon from "../icons/Icon"

const Home = () => {
  return (
    <Wrapper id="home">
      <StyledHome>
        <Grid>
          <Row>
            <Left>
              <h1>I'm Lucas and I build things.</h1>

              <Description>
                I’m a resourceful engineer who likes to challenge himself to
                make a lot out of little.
              </Description>
              <div>
                <Button> Resume </Button>
                <IconGroup>
                  <Icon type="mail" />
                  <Icon type="linkedin" /> <Icon type="github" />
                </IconGroup>
              </div>
            </Left>
          </Row>
        </Grid>
      </StyledHome>
    </Wrapper>
  )
}

export default Home

const Grid = styled.div`
  display: grid;
`

const Left = styled.div`
  flex: 70%;

  @media screen and (max-width: 600px) {
    flex: 100%;
  }
`
const Right = styled.div`
  flex: 30%;
  justify: flex-end;

  @media screen and (max-width: 600px) {
    flex: 100%;
  }
`

const Row = styled.div`
  display: flex;
`

const Image = styled.img`
  width: 100%;
  max-width: 30rem;
  margin: 2rem;
`

const StyledHome = styled.div`
  display: block;
  padding-bottom: 5rem;
  width: 100%;
`

const Wrapper = styled.div`
  display: flex;
  height: 80vh;
  align-items: center;
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
