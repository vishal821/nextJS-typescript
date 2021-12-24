
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import {GRAPHQL_END_POINT} from "../config";

const client = new ApolloClient({
    uri: GRAPHQL_END_POINT,
    cache: new InMemoryCache()
});

export default client;