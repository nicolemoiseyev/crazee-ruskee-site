import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Home from "../components/sections/Home"
import About from "../components/sections/About"
import Experience from "../components/sections/Experience"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"

const IndexPage = () => (
  <Layout>
    <Home />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
