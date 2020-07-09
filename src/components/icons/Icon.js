import React from "react"
import { useThemeValue } from "../context/ThemeContext"
import styled from "styled-components"
import Github from "./Github"
import Mail from "./Mail"
import LinkedIn from "./LinkedIn"

// define the icon types and associated links
const iconTypes = {
  github: { component: Github, url: "https://github.com/crazeeruskee" },
  mail: { component: Mail, url: "mailto:crazeeruskee@gmail.com" },
  linkedin: {
    component: LinkedIn,
    url: "https://www.linkedin.com/in/lucasmois/",
  },
}

const Icon = props => {
  const [{ theme }, dispatch] = useThemeValue()
  const RenderIcon = iconTypes[props.type].component
  return (
    <StyledLink href={iconTypes[props.type].url} target="_blank">
      <RenderIcon color={theme.text} />
    </StyledLink>
  )
}

const StyledLink = styled.a`
  & :hover {
    cursor: pointer;
  }
  margin: 1.5rem;
  height: 100%;
`
export default Icon
