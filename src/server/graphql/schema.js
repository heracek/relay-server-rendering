import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql';

let listType = new GraphQLObjectType({
  name: 'List',
  fields: () => ({
    name: {
      type: GraphQLString
    }
  })
});

let ViewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: () => ({
    list: {
      type: new GraphQLList(listType)
    }
  })
});

let viewer = {
  list: [
    {
      name: 'First'
    },
    {
      name: 'Second'
    }
  ]
};

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      viewer: {
        type: ViewerType,
        resolve() {
          return viewer;
        }
      }
    }
  })
});

let query = `
 query Test {
   viewer {
     list {
       name
     }
   }
 }
`;

graphql(schema, query).then(result => {
 console.log(JSON.stringify(result, null, 4));
});