import React from "react";
import Library from "./Library";
import SignMeIn from "./Signin";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_USERS = gql`
  {
    me {
      fullName
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_USERS);


  return (
    <div>
      <SignMeIn />
      {/* <h3>{data.me}</h3> */}
      <Library />
    </div>
  );
}

export default App;
