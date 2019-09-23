import { GraphQLServer } from 'graphql-yoga';
import { buildSchema } from 'graphql';
import { resolvers } from './graphql/resolvers';

const Logger = console;

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

const port = 4000;
const options = {
  port,
};

server.start(options)
  .then(()=> { Logger.info(`port : ${port} listening...`)})
  .catch(()=> { Logger.error(`port : ${port} fail`)});
