import React from "React"
import styled from "styled-components"
import { useThemeValue } from "../context/ThemeContext"

const ProjectCard = props => {
  const [{ theme }, dispatch] = useThemeValue()

  return (
    <CardWrapper>
      <Card>
        <Title>{props.title}</Title>
        <CardContent borderColor={theme.text}> Hello</CardContent>
      </Card>
    </CardWrapper>
  )
}

// Helper function to convert pixels to rems (remy)
const remy = px => `${px / 16}rem`

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  min-height: 260px;
  margin-bottom: 2rem;
`

const CardContent = styled.div`
  perspective: 1000px;
  transition: all 0.25s ease-in-out;
  border: 2px solid ${props => props.borderColor};
  width: 100%;
  height: 100%;
  padding: 2rem;
  cursor: pointer;

  &:focus,
  &:hover {
    box-shadow: 0 0 ${remy(40)} ${props => props.borderColor + "20"};
  }

  &.flipped {
    & > div:first-of-type {
      // frontside of the card
      transform: perspective(1000px) rotateY(-180deg);
    }

    & > div:last-of-type {
      // backside of the card
      transform: perspective(1000px) rotateY(0deg);
    }
  }
`

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default ProjectCard
