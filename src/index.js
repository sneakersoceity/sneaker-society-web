import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery,
  gql,
} from "@apollo/client";
import { MyTheme } from "./theme/theme";
import { setContext } from "@apollo/client/link/context";
import { GlobalStyles } from "@mui/material";
import { AuthProvider } from "./auth/auth";

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_API_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = sessionStorage.getItem("Auth Token");
  // console.log(token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={MyTheme}>
        <GlobalStyles
          styles={{
            body: { backgroundColor: "black" },
          }}
        />
        <ApolloProvider client={client}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ApolloProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")

  // Gerardo text
  // udpated
);
