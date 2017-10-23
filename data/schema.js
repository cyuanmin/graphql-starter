import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID,
    GraphQLBoolean,
    GraphQLFloat
  } from 'graphql';

  // Here is some dummy data to make this piece of code simpler.
// It will be changeable after introducing mutation.
var TODOs = [
    {
      "id": 1446412739542,
      "title": "Read emails",
      "completed": false
    },
    {
      "id": 1446412740883,
      "title": "Buy orange",
      "completed": true
    }
  ];

  const TodoType = new GraphQLObjectType({
    name: 'todo',
    fields: function () {
      return {
        id: {
          type: GraphQLInt
        },
        title: {
          type: GraphQLString
        },
        completed: {
          type: GraphQLBoolean
        }
      }
    }
  });

  
  const query = new GraphQLObjectType({
    name: "Query",
    description: "First GraphQL Server Config - Yay!",
    fields: function(){
        return {
            todos:{
                type: new GraphQLList(TodoType),
                resolve: function(){
                    return TODOs;
                }
            }
        }
    }
  });
  
  const schema = new GraphQLSchema({
    query
  });
  
  export default schema;