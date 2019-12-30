import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Template from "./Template";
import Home from "./screens/Home";
import Cpus from "./screens/Cpus";
import Laptops from "./screens/Laptops";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/cpus">
          <Template>
            <Cpus />
          </Template>
        </Route>
        <Route path="/laptops">
          <Template>
            <Laptops />
          </Template>
        </Route>
        <Route path="/">
          <Template>
            <Home />
          </Template>
        </Route>
      </Switch>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
