import React from "react"
import styled from "styled-components"
import Icon from "../icons/Icon"
import { skills } from "../../data"

const About = () => {
  const renderSkills = Object.keys(skills).map(skillKey => (
    <Skills>
      <ul>
        <div key={skillKey}> {skillKey}</div>
        {skills[skillKey].map(skill => (
          <li key={skill}> {skill} </li>
        ))}
      </ul>
    </Skills>
  ))

  return (
    <StyledSection id="about">
      <TextWrapper>
        <h1>About</h1>
        <Description>
          I received a BSE in Electrical and Computer Engineering from Carnegie
          Mellon University. I’m interested in robotics, aerospace engineering,
          and 3D printing. Basically, I’d like to work on 3D printed robots that
          will enable life on Mars.
        </Description>
        <SkillsGrid>{renderSkills}</SkillsGrid>
      </TextWrapper>
    </StyledSection>
  )
}

export default About

const TextWrapper = styled.div``

const Description = styled.div`
  padding: 3rem 0;
  font-size: 1.5rem;
  line-height: 3rem;
  max-width: 50rem;
`

const StyledSection = styled.div`
  height: 80vh;
  text-align: left;
  padding: 10rem 0 0 0;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-items: start;
  justify-content: space-evenly;
  gap: 3rem;
  padding: 2rem 0;
`

const Skills = styled.div`
  display: inline-block;
  ul {
    line-height: 2rem;
    max-width: 30rem;
    font-family: "Roboto Mono", monospace;
    padding-left: 2rem;
    list-style: none;
  }

  li {
    font-size: 1.2rem;
  }

  div {
    font-size: 2rem;
    margin: 1rem 0 1rem -2rem !important;
  }

  li::before {
    content: ">";
    margin-left: -20px;
    margin-right: 5px;
  }
`
