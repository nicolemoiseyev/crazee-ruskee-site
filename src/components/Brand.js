import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Brand = () => {
  return (
    <AnchorLink to="/#home" stripHash>
      <BrandStyle>Crazee Ruskee</BrandStyle>
    </AnchorLink>
  )
}

export default Brand

const BrandStyle = styled.h2`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
