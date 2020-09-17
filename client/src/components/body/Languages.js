import React, { useState, useEffect } from "react";
import GithubAPI from "../../utils/api/github.api";
import { CircularProgress } from "@material-ui/core";
import theme from "../../ui/theme";

const Languages = ({ url, user, projectName }) => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchGithubProjectLanguage = async (url, user, projectName) => {
      try {
        const githubLanguages = await GithubAPI.getProjectLanguages(
          url,
          user,
          projectName
        );
        const languagesLowerCase = Object.keys(githubLanguages).map(value =>
          value.toLowerCase()
        );
        const languageArray = await mapLanguageStyle(languagesLowerCase);
        setLanguages(languageArray);
      } catch (error) {
        console.error("There is an error fetching github languages");
      }
    };

    const mapLanguageStyle = languageArray => {
      const languageColorKey = Object.keys(theme.languages);
      return mapLanguageColor(languageArray, languageColorKey);
    };

    const mapLanguageColor = (languageArray, languageColorKey) =>
      languageArray.map((value, index) => {
        let style = {
          fontSize: ".75em",
          marginLeft: "3px",
          padding: "5px",
          borderRadius: "20px",
          background: "white",
          color: "black",
        };

        if (languageColorKey.includes(value)) {
          style.background = theme.languages[value].background;
          style.color = theme.languages[value].color;
          return { name: languageArray[index], style };
        }

        style.background = theme.languages.default.background;
        style.color = theme.languages.default.color;
        return { name: languageArray[index], style };
      });

    fetchGithubProjectLanguage(url, user, projectName);
  }, [projectName]);

  return (
    <>
      {languages ? (
        <div>
          {languages.map((language, index) => (
            <span key={`${projectName}-${index}`} style={language.style}>
              {language.name}
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