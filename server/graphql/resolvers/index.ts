import { User, Project, Address } from '../db';
import { ProvidedRequiredArgumentsRule} from 'graphql';

interface Argument {
  str: string;
  num: number;
};

const resolvers = {
  Hello: {
    id: () => 1,
    name: () => "Min-Uk.Lee",
    score: () => 100,
  },

  Args: {
    createArgs: (parent, { str, num }: Argument, context, info) => `create str: ${str}, num: ${num}`;
    deleteArgs: ()
  },
}
