import React from "react";
import { Router } from "@reach/router";
import Random from "../modules/Random";

const ClientRouter = () => {
  return (
    <Router>
      <Random path="/dynamic/random/:results" />
    </Router>
  );
};

export default ClientRouter;
