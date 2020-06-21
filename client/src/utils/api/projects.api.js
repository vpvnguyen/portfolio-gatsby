import axios from "axios";

export default {
  getAllProjects: () => {
    console.log(`getAllProjects: get all projects`);
    return axios.get("http://localhost:5000/api/getAllProjects");
  },
};
