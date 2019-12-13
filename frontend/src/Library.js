import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_LIBRARY = gql`
  {
    items {
      id
      title
      user {
        email
      }
    }
  }
`;

function Library() {
  const { loading, error, data } = useQuery(GET_LIBRARY);
  if (loading) return "Loading...";
  if (error) return `Error: ${error.message}`;

  return (
    <div>
      {data.items.map(item => (
        <div>
          <p>{item.title}</p> {item.user ? `added by ${item.user.email}` : null}
        </div>
      ))}
    </div>
  );
}

export default Library;
