import React from "react"
import styled from "styled-components"
import Toggle from "react-toggle"
import { useThemeValue } from "./context/ThemeContext"

const ThemeToggle = props => {
  const [{ theme }, dispatch] = useThemeValue()

  return (
    <StyledToggle
      theme={theme.name}
      checked={theme.name === "LIGHT"}
      id="toggle-theme"
      icons={{
        checked: null,
        unchecked: null,
      }}
      onChange={props.onChange}
    />
  )
}

const StyledToggle = styled(Toggle)`
  position: relative;
  vertical-align: middle;
  justify-content: center;

  & .react-toggle-track,
  .react-toggle-thumb {
    padding: 0;
  }

  & .react-toggle,
  .react-toggle--checked {
    background-color: #39dda7;
  }
`

export default ThemeToggle
