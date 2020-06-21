import React from "react";
import { Link } from "gatsby";

import Layout from "../ui/Layout/Layout.js";

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
      <h1>Server Time</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default Time;
