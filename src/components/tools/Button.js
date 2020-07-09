import React from "react"
import styled from "styled-components"
import { useThemeValue } from "../context/ThemeContext"

const Button = props => {
  const [{ theme }, dispatch] = useThemeValue()
  return (
    <StyledButton {...props} borderColor={theme.text}>
      {props.children}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.a`
  border-radius: 5px;
  font-size: 2rem;
  border: 2px solid ${props => props.borderColor};
  display: inline-block;
  padding: 0.75rem 1.4rem;
  font-family: "Roboto Mono", monospace;
`
