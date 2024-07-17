// src/apolloClient.js
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://graph-vert.vercel.app/graphql', // Replace with your GraphQL server URL
  credentials: 'same-origin', // Optional: Include if your server requires credentials
  headers: {
    // Optional: Include any headers needed for your server (e.g., authorization headers)
    Authorization: localStorage.getItem('token') || '',
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    // Optional: Set global fetch options here (e.g., mode, credentials)
    // watchQuery: {
    //   fetchPolicy: 'no-cache', // Example: Disable cache for watchQuery
    // },
    query: {
      fetchPolicy: 'no-cache', // Example: Disable cache for query
    }
    // mutate: {
    //   fetchPolicy: 'no-cache', // Example: Disable cache for mutate
    // },
  },
});

export { ApolloProvider, client };
