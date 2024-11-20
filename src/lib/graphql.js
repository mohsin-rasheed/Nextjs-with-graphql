import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;
const token = process.env.NEXT_PUBLIC_HYGRAPH_TOKEN;

// Initialize GraphQL Client
export const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
  },
});
async function testRequest() {
  try {
    const data = await hygraph.request(`{ __schema { queryType { name } } }`);
    console.log('Test GraphQL Response:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}
testRequest();

// GraphQL Queries
export const GET_TODOS = `
  query {
    todos {
      id
      title
      completed
    }
  }
`;


export const ADD_TODO = `
  mutation($title: String!) {
    createTodo(data: { title: $title, completed: false }) {
      id
      title
      completed
    }
  }
`;

export const UPDATE_TODO = `
  mutation UpdateTodo($where: TodoWhereUniqueInput!, $data: TodoUpdateInput!) {
    updateTodo(where: $where, data: $data) {
      id
      title
      completed
    }
  }
`;


export const DELETE_TODO = `
  mutation($id: ID!) {
    deleteTodo(where: {id:$id}) {
      id
    }
  }
`;

