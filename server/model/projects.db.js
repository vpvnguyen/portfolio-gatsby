const pool = require("../config/database");

// get mock data
const ProjectsDB = {
  getMockData: async () => {
    try {
      const mockData = await pool.query("SELECT * FROM mock_data");
      return mockData.rows;
    } catch (error) {
      console.error("ProjectsDB.getMockData", error.message);
    }
  },
};

module.exports = ProjectsDB;
