import React from "react"
import styled from "styled-components"
import Icon from "../icons/Icon"
import ProjectCard from "../tools/ProjectCard"
import { projects } from "../../data"

const Projects = () => {
  return (
    <StyledSection id="projects">
      <TextWrapper>
        <h1>Projects</h1>
      </TextWrapper>
      <ProjectsGrid>
        {projects.map((proj, ind) => (
          <ProjectCard key={ind} {...proj} />
        ))}
      </ProjectsGrid>
    </StyledSection>
  )
}

export default Projects

const TextWrapper = styled.div``

const StyledSection = styled.div`
  min-height: 80vh;
  text-align: left;
  padding: 10rem 0 0 0;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 4rem;
  padding: 2rem 0;
`
