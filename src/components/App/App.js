import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Layout from '../Layout/Layout';

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
    headers: {
      "accept": "application/json"
    }
  }),
  cache: new InMemoryCache()
});

export default () => (
  <ApolloProvider client={apolloClient}>
    <Layout/>
  </ApolloProvider>
);
