import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 })

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        theme={props.theme}
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks theme={props.theme}>
          <li>
            <AnchorLink to="/#about" stripHash>
              About
            </AnchorLink>
          </li>{" "}
          <li>
            {" "}
            <AnchorLink to="/#projects" stripHash>
              Projects
            </AnchorLink>{" "}
          </li>
          <li>
            {" "}
            <AnchorLink to="/#experience" stripHash>
              Experience
            </AnchorLink>{" "}
          </li>
          <li>
            {" "}
            <AnchorLink to="/#contact" stripHash>
              Contact
            </AnchorLink>{" "}
          </li>
        </NavLinks>
      </CollapseWrapper>
    )
  }
  return null
}

export default CollapseMenu

const CollapseWrapper = styled(animated.div)`
  background: ${props => props.theme.text};
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: ${props => props.theme.background};
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #39dda7;
      border-bottom: 1px solid #39dda7;
    }
  }
`
