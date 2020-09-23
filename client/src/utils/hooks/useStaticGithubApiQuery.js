import { useStaticQuery, graphql } from "gatsby";

const useStaticGithubApiQuery = () =>
  useStaticQuery(graphql`
    query siteGithubApiQueryTwo {
      site {
        siteMetadata {
          api {
            github {
              url
              user
            }
          }
        }
      }
    }
  `);

export default useStaticGithubApiQuery;
