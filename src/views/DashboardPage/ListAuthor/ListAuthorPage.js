import { useEffect, useState, useContext } from "react";
import ListAuthorComponent from "./ListAuthorComponent";
import { AuthorContext } from "../DashboardPage";
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
