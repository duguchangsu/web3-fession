import { ApolloClient, InMemoryCache } from "@apollo/client";

export const uniswapClient = new ApolloClient({
  uri: "https://gateway.thegraph.com/api/e19090d36ae272c2e740500354c30bac/subgraphs/id/ELUcwgpm14LKPLrBRuVvPvNKHQ9HvwmtKgKSH6123cr7",
  cache: new InMemoryCache(),
});
