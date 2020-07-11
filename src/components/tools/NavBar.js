import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"
import Brand from "./Brand"
import { useThemeValue } from "../context/ThemeContext"
import GlobalStyles from "../../styles/Global"
import ThemeToggle from "./ThemeToggle"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Navbar = props => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  })

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly,
  })

  const [{ theme }, dispatch] = useThemeValue()

  return (
    <>
      <NavBar style={barAnimation} backgroundColor={theme.background}>
        <FlexContainerBrand>
          <Brand />
        </FlexContainerBrand>

        <FlexContainer>
          <NavLinks style={linkAnimation}>
            <AnchorLink to="/#about" stripHash>
              About
            </AnchorLink>
            <AnchorLink to="/#projects" stripHash>
              Projects
            </AnchorLink>
            <AnchorLink to="/#experience" stripHash>
              Experience
            </AnchorLink>
            <AnchorLink to="/#contact" stripHash>
              Contact
            </AnchorLink>
          </NavLinks>
          <ThemeToggle />
        </FlexContainer>
      </NavBar>
      <GlobalStyles theme={theme} />
    </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  display: flex;
  top: 0;
  z-index: 1;
  font-size: 1.4rem;
  width: 100vw;
  background-color: ${props => props.backgroundColor};
`

const FlexContainerBrand = styled.div`
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  top: 0;
  position: absolute;
  left: 0;
`

const FlexContainer = styled.div`
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  top: 0;
  position: absolute;
  right: 0;

  & div {
    display: inline-block;
  }
`

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;

  & a {
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #39dda7;
      border-bottom: 1px solid #39dda7;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`
