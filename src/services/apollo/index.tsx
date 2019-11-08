import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloProvider } from '@apollo/react-hooks';

import { api } from '../api';
import { config } from 'Config';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError, response }) => {
      let msgErrors: string[] = [];
      if (graphQLErrors) {
        console.log(graphQLErrors, response);
        msgErrors = graphQLErrors.map((err) => `graphQLError: ${err}`);
      }
      if (networkError) console.error(`[Network error]: ${networkError}`);
      if (response && response.errors) {
        response.errors.msg = msgErrors.join('/\n');
      }
    }),
    new HttpLink({
      uri: `${config.gatewayUrl}/graphql`,
      credentials: 'include',
      fetch: api.post
    })
  ])
});

export const AppollonProvider: React.FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
