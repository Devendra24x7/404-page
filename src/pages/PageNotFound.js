import React from "react";

import pagenotfoundImage from "../pagenotfound.jpg";
import Button from '@mui/material/Button';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

const PageNotFound = () => {
  return (
    <Router>
      <Switch>
        <div className="pageNotFound">
        <div className="err-right">
            <img
              src={pagenotfoundImage}
              height="500"
              width="500"
              alt="not found"
            />
          </div>
          <div className="err-left">
            <h1>Oops..! The page not found</h1>
            <p>Looks like the link you followed probably broken or the page has been stolen.</p>
            <Button variant="contained"> Home Page</Button>
          </div>
         
        </div>
      </Switch>
    </Router>
  );
};

export default PageNotFound;
