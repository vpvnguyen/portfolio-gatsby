import React, { useState, useEffect } from "react";
import GithubAPI from "../../utils/api/github.api";

const style = {
  languages: {
    fontSize: ".75rem",
    marginLeft: "3px",
    padding: "5px",
    borderRadius: "20px",
    border: "1px solid #03dac5",
    background: "white",
    // textDecorationColor: "#EA215A",
    // textDecorationThickness: ".125em",
    // textUnderlineOffset: "1.5px",
    // textDecorationStyle: "double",
  },
};

const Languages = ({ projectName }) => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchGithubProjectLanguage = async projectName => {
      const response = await GithubAPI.getProjectLanguages(projectName);
      console.log(Object.keys(response));
      setLanguages(Object.keys(response));
    };

    fetchGithubProjectLanguage(projectName);
  }, [projectName]);

  return (
    <>
      {languages ? (
        <div key={`${projectName}-${languages}`}>
          {languages.map((language, index) => (
            <span key={language[index]} style={style.languages}>
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
