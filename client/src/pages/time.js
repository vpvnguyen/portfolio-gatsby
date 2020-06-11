import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Time = () => {
  //   const [time, setTime] = useState({})

  //   // fetch time from server
  //   const getTimeFromServer = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/time/moment")
  //       const jsonData = await response.json()
  //       setTime(response.data)
  //       console.log(jsonData)
  //     } catch (error) {
  //       console.error(error.message)
  //     }
  //   }

  //   useEffect(() => {
  //     getTimeFromServer()
  //   }, [])

  return (
    <Layout>
      <SEO title="time page" />
      <h1>Server Time</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Time