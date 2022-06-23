import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
      isLiked @client
    }
  }
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  console.log(data)
  return (
    <div>baek</div>
  );
};