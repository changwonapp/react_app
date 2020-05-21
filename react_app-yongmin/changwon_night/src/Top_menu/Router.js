import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import home from "../Home";
import campus from "../Board/campus";
import community from "../Board/community";
import employment from "../Board/employment";
import notice from "../Board/notice";
import life from "../Board/life";
import Header from "./Header";
export default () => (
    <Router>
      <Header />
      <Route exact path="/" component={home} />
      <Route path="/campus" component={campus} />
      <Route path="/community" component={community} />
      <Route path="/employment" component={employment} />
      <Route path="/notice" component={notice} />
      <Route path="/life" component={life} />
    </Router>
  )