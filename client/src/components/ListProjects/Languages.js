import React, { useState, useEffect } from "react";
import GithubAPI from "../../utils/api/github.api";
import { CircularProgress } from "@material-ui/core";

import theme from "../../ui/theme";

const style = {
  langaugeColor: `${theme.languages.default}`,
  languages: {
    fontSize: ".75em",
    marginLeft: "3px",
    padding: "5px",
    borderRadius: "20px",
    border: `1px solid #03dac5`,
    background: "white",
  },
};

const Languages = ({ projectName }) => {
  const [languages, setLanguages] = useState([]);
  const [languageColor, setLanguageColor] = useState([]);

  const getLanguageColor = array => {
    const key = Object.keys(theme.languages);

    const languageColors = array.map((value, index) => {
      if (key.includes(value))
        return { language: array[index], color: theme.languages[value] };
      return { language: array[index], color: theme.languages.default };
    });

    console.log(languageColors);
    setLanguageColor(languageColors);
  };

  console.log("theme color", Object.keys(theme.languages));
  console.log("style", style.langaugeColor);
  useEffect(() => {
    const fetchGithubProjectLanguage = async projectName => {
      const githubLanguages = await GithubAPI.getProjectLanguages(projectName);
      const languagesLowerCase = Object.keys(githubLanguages).map(value =>
        value.toLowerCase()
      );
      setLanguages(languagesLowerCase);
      console.log("language to lower", languagesLowerCase);
      console.log("state", languages);
      getLanguageColor(languages);
    };

    fetchGithubProjectLanguage(projectName);
  }, [projectName]);

  return (
    <>
      {languages ? (
        <div>
          {languages.map((language, index) => (
            <span key={`${projectName}-${index}`} style={style.languages}>
              {/* {if (language)} */}
              {language}
            </span>
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
      {/* WIP - render language and its color */}
      {languageColor ? (
        <div>
          {languageColor.map((value, index) => (
            <span key={`${projectName}-${index}`} style={style.languageColor}>
              {/* {if (language)} */}
              {value.language}
              {value.color}
            </span>
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Languages;
