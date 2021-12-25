import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { GRAPHQL_END_POINT } from "../config";

export default function () {
  const client = new ApolloClient({
    uri: GRAPHQL_END_POINT,
    cache: new InMemoryCache(),
  });
}
