import React from "React"
import styled from "styled-components"
import { useThemeValue } from "../context/ThemeContext"

const ProjectCard = props => {
  const [{ theme }, dispatch] = useThemeValue()

  return <Card borderColor={theme.text}>{props.title}</Card>
}

const Card = styled.div`
  border-radius: 5px;
  border: 2px solid ${props => props.borderColor};
  display: inline-block;
  padding: 2rem;
  min-height: 200px;
  min-width: 300px;
  margin-right: 2rem;
  margin-bottom: 2rem;
`
export default ProjectCard
