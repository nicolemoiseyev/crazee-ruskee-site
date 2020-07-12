import React, { useState } from "react"
import styled from "styled-components"
import { useThemeValue } from "../../context/ThemeContext"

const ThemeToggle = props => {
  const [{ theme }, dispatch] = useThemeValue()

  const toggleTheme = () =>
    dispatch({
      type: "toggleTheme",
    })

  return (
    <StyledToggle checked={theme.name === "LIGHT"} theme={theme}>
      <input id={`react-switch-new`} type="checkbox" onChange={toggleTheme} />
      <label htmlFor={`react-switch-new`}>
        <span />
      </label>
    </StyledToggle>
  )
}

const StyledToggle = styled.div`
  display: flex;

  & input {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  & label {
    display: inline-block;
    align-items: center;
    cursor: pointer;
    width: 46px;
    height: 23px;
    background-color: ${props => props.theme.text};
    border-radius: 100px;
    position: relative;
    transition: background-color 0.2s;

    & span {
      content: "";
      position: absolute;
      top: 3px;
      width: 17px;
      height: 17px;
      border-radius: 17px;
      transition: 0.3s;
      background: ${props => props.theme.background};
      box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
      &:active {
        width: 20px;
      }

      left: ${props =>
        props.checked
          ? "calc(100% - 2px); transform: translateX(-100%)"
          : "2px"};
    }
  }
`

export default ThemeToggle
