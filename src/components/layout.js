/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ThemeSwitcher from "./context/ThemeSwitcher"
import styled from "styled-components"
import NavBar from "./NavBar"
import GlobalStyles from "../styles/Global"
import "react-toggle/style.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeSwitcher>
      <NavBar />
      <div
        style={{
          margin: `10rem auto 0 auto`,
          maxWidth: 960,
          padding: `0 3rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </ThemeSwitcher>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
