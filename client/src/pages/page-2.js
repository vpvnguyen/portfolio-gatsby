import React from "react";
import { Link } from "gatsby";

import Layout from "../ui/Layout/Layout.js";

import UploadProject from "../components/UploadProject/UploadProject.js";

const SecondPage = () => (
  <Layout>
    <UploadProject />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
