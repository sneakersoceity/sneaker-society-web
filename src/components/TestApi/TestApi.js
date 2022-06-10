import React, { useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

export default function TestApi() {
  const TEST_QUERY = gql`
    query GetMembers {
      members {
        id
        email
      }
    }
  `;

  const { loading, error, data } = useQuery(TEST_QUERY);
  useEffect(() => {
    let authToken = sessionStorage.getItem("token");
    console.log(authToken);
    if (!loading) {
      console.log(data);
    }

    if (error) {
      console.log(error);
    }
    // console.log(loading);
  }, [loading]);
  return (
    <div>
      <p>Test api yo</p>
    </div>
  );
}
