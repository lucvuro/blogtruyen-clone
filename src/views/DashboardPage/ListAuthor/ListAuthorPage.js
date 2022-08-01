import ListAuthorComponent from "./ListAuthorComponent";

const ListAuthorPage = (props) => {
  const { user } = props;
  return (
    <>
      <ListAuthorComponent user={user} />
    </>
  );
};

export default ListAuthorPage;
