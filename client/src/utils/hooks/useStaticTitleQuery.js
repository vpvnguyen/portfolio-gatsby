import { useStaticQuery, graphql } from "gatsby";

const useStaticTitleQuery = () =>
  useStaticQuery(graphql`
    query siteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

export default useStaticTitleQuery;
