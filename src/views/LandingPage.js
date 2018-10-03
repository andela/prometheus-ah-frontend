import React from "react";
import { Link } from "react-router-dom";
import routes from "../constants/routes";

const LandingPage = () => (
  <div>
    This is from the LandingPage component
    <Link to={routes.SIGN_IN}>SIGN_IN</Link>
  </div>
);

export default LandingPage;
