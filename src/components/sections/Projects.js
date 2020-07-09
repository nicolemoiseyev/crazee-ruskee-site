import React from "react"
import styled from "styled-components"
import Icon from "../icons/Icon"
import ProjectCard from "../tools/ProjectCard"

const Projects = () => {
  return (
    <StyledSection id="projects">
      <TextWrapper>
        <h1>Projects</h1>
      </TextWrapper>
      <ProjectCard title="Project A" />
      <ProjectCard title="Project B" />
    </StyledSection>
  )
}

export default Projects

const TextWrapper = styled.div``

const StyledSection = styled.div`
  height: 80vh;
  text-align: left;
  padding: 10rem 0 0 0;
`
