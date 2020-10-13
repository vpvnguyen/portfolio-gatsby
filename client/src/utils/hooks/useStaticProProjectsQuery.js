import { useStaticQuery, graphql } from "gatsby";

const useStaticProProjectsQuery = () =>
  useStaticQuery(graphql`
    query siteProProjectsQuery {
      site {
        siteMetadata {
          professionalProjects {
            name
            url
          }
        }
      }
    }
  `);

export default useStaticProProjectsQuery;
