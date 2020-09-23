import { useStaticQuery, graphql } from "gatsby";

const useStaticSocialQuery = () =>
  useStaticQuery(graphql`
    query siteSocialQuery {
      site {
        siteMetadata {
          social {
            github
            linkedin
          }
        }
      }
    }
  `);

export default useStaticSocialQuery;
