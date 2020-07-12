import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"
import Brand from "./Brand"
import { useThemeValue } from "../../context/ThemeContext"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import GlobalStyles from "../../../styles/Global"
import BurgerMenu from "./BurgerMenu"
import CollapseMenu from "./CollapseMenu"
import ThemeToggle from "./ThemeToggle"

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
          <BurgerWrapper>
            <BurgerMenu
              color={theme.text}
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        theme={theme}
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
      <GlobalStyles theme={theme} />
    </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  display: flex;
  top: 0;
  z-index: 20;
  font-size: 1.4rem;
  width: 100vw;
  background-color: ${props => props.backgroundColor};
  -webkit-transition: background-color 0.2s ease;
  -moz-transition: background-color 0.2s ease;
  -o-transition: background-color 0.2s ease;
  transition: background-color 0.2s ease;
  height: 5rem;
}`

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
  height: 100%;
  top: 0;
  position: absolute;
  right: 0;

  & div {
    display: inline-block;
    margin: 0 0 0 1.5rem;
  }

  @media (max-width: 768px) {
    div {
      margin: 0.5rem;
    }
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

const BurgerWrapper = styled.div`
  margin: 0;
  @media (min-width: 769px) {
    display: none !important;
  }
`
