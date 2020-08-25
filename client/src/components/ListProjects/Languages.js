import React, { useState, useEffect } from "react";
import GithubAPI from "../../utils/api/github.api";

const style = {
  languages: {
    fontSize: ".75em",
    marginLeft: "3px",
    padding: "5px",
    borderRadius: "20px",
    border: "1px solid #03dac5",
    background: "white",
  },
};

const Languages = ({ projectName }) => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchGithubProjectLanguage = async projectName => {
      const response = await GithubAPI.getProjectLanguages(projectName);
      setLanguages(Object.keys(response));
    };

    fetchGithubProjectLanguage(projectName);
  }, [projectName]);

  return (
    <>
      {languages ? (
        <div>
          {languages.map((language, index) => (
            <span key={`${projectName}-${index}`} style={style.languages}>
              {language}
            </span>
          ))}
        </div>
      ) : (
        `Loading...`
      )}
    </>
  );
};

export default Languages;
