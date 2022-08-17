import { useEffect, useState, useContext } from "react";
import ListAuthorComponent from "./ListAuthorComponent";
import { AuthorContext } from "../../App";
const ListAuthorPage = (props) => {
  const { user } = props;
  const { listAuthors } = useContext(AuthorContext);
  return (
    <>
      <ListAuthorComponent user={user} listAuthors={listAuthors} />
    </>
  );
};

export default ListAuthorPage;
