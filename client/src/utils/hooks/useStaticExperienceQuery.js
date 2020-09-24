import { useStaticQuery, graphql } from "gatsby";

const useStaticExperienceQuery = () =>
  useStaticQuery(graphql`
    query siteExperienceQuery {
      site {
        siteMetadata {
          experience {
            current
            past
          }
        }
      }
    }
  `);

export default useStaticExperienceQuery;
