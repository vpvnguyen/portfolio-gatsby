import React, { useState, useEffect } from "react";
import GithubAPI from "../../utils/api/github.api";

const Languages = ({ projectName }) => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchGithubProjectLanguage = async projectName => {
      const response = await GithubAPI.getProjectLanguages(projectName);
      // await setLanguages(response);
      console.log(response);
      // Example response:
      // {language1: number, language2: number}
      console.log(Object.keys(response));
      setLanguages(response);
    };

    fetchGithubProjectLanguage(projectName);
    console.log(projectName);
    // setLanguages(props);
  }, [projectName]);

  return (
    <>
      {/* {languages ? Object.keys(languages)} */}
      <div>{projectName}</div>
    </>
  );
};

export default Languages;
