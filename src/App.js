import "./App.css";

import React, { Component } from "react";
import NavBar from "./Components/Navbar";
import News from "./Components/News";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  apiKey = "c1f891f7fe6846ccb2beb1de6ab50f54";
  pageSize = 6;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="business/*"
              element={
                <News
                  key="business"
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="entertainment/*"
              element={
                <News
                  key="entertainment"
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="health/*"
              element={
                <News
                  key="health"
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="science/*"
              element={
                <News
                  key="science"
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="sports/*"
              element={
                <News
                  key="sports"
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="technology/*"
              element={
                <News
                  key="technology"
                  apiKey={this.apiKey}
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
