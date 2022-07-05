import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient } from '@apollo/client';
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: "http://ec2-13-38-120-144.eu-west-3.compute.amazonaws.com:3100",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
