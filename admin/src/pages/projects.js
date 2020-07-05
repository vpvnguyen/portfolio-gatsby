import React from "react"

import Layout from "../components/layout.js"
import UploadProject from "../components/UploadProject.js"
import ListProject from "../components/ListProjects.js"

const style = {}

const Projects = () => {
  return (
    <Layout>
      <ListProject />
      <UploadProject />
    </Layout>
  )
}

export default Projects
