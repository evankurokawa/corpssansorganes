import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

//import components
import Header from "../components/header"
import Banner from "../components/banner"


const IndexPage = () => (
  <div>
    <Header />
    <Banner />
  </div>
)

export default IndexPage
