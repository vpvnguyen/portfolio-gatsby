import React from "react";
import Layout from "../ui/layout/Layout.js";
import Welcome from "../components/landing/Welcome.js";
import ListProjects from "../components/body/ListProjects.js";
import Footer from "../components/footer/Footer.js";
import EmbedTwitterTimeline from "../components/body/EmbedTwitterTimeline.js";
import Background from "../components/landing/Background.js";

const style = {
  page: {
    height: "100vh",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1280px",
  },
  static: {
    flex: "1 100%",
    textAlign: "center",
  },
  left: {
    flex: 2,
    padding: "1rem 2rem 1rem 2rem",
  },
  right: {
    flex: 1,
    padding: "1rem 2rem 1rem 2rem",
  },
};

const IndexPage = () => (
  <Layout>
    <div style={style.page}>
      <div style={style.container}>
        <div style={style.static}>
          <Background>
            <Welcome />
          </Background>
        </div>

        <div style={style.content}>
          <div style={style.left}>
            <ListProjects />
          </div>
          <div style={style.right}>
            <EmbedTwitterTimeline />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
