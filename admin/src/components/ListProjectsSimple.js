import React, { useState, useEffect } from "react"
import Paper from "@material-ui/core/Paper"

import dayjs from "dayjs"

import GithubAPI from "../utils/api/github.api.js"

const style = {
  tableContainer: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "arial",
  },
  table: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "10px",
    padding: "10px",
    backgroundColor: "#EDEDED",
  },
  subtext: {
    fontSize: ".75rem",
  },
}

const ListProjects = () => {
  const [githubProjects, setGithubProjects] = useState()

  useEffect(() => {
    const fetchGithubProjects = async () => {
      const githubProjectsResponse = await GithubAPI.getGithubProjects()
      await setGithubProjects(githubProjectsResponse)
      console.log(githubProjectsResponse)
    }

    fetchGithubProjects()
  }, [])

  return (
    <div style={style.tableContainer}>
      {githubProjects
        ? githubProjects.map(row => (
            <Paper style={style.table} key={row.name}>
              <div>
                <div>{row.name}</div>
                <div style={style.subtext}>{row.description}</div>
              </div>
              <div>
                <div style={style.subtext}>{row.language}</div>
                <div style={style.subtext}>
                  {dayjs(row.pushed_at).format("MMM/YYYY")}
                </div>
              </div>
            </Paper>
          ))
        : `Loading...`}
    </div>
  )
}

export default ListProjects
