import React from "react";
import theme from "../../ui/theme";
import useStaticExperienceQuery from "../../utils/hooks/useStaticExperienceQuery";

const AboutMe = () => {
  const data = useStaticExperienceQuery();

  return (
    <>
      <h1 style={theme.h1}>{data.site.siteMetadata.experience.current}</h1>
      {data &&
        data.site.siteMetadata.experience.past.map(value => (
          <p key={value}>{value}</p>
        ))}
    </>
  );
};

export default AboutMe;
