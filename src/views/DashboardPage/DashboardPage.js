import DashboardComponent from "./DashboardComponent";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useEffect, createContext } from "react";
import { createAxios } from "../../api/axiosClient";
import { setAuthorList } from "../../api/authorAPI";
export const AuthorContext = createContext();
const DashboardPage = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const listAuthors = useSelector((state) => state.authors.currentAuthors);
  const dispatch = useDispatch();
  const axiosClient = createAxios(user, dispatch);
  const history = useHistory();
  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  });
  useEffect(() => {
    const fetchData = async () => {
      await setAuthorList(user, dispatch, axiosClient);
    };
    fetchData();
  }, []);
  const { path, url } = useRouteMatch();
  return (
    <>
      <AuthorContext.Provider value={{ user: user, listAuthors: listAuthors }}>
        {user && (
          <div className="dashboard-container">
            <DashboardComponent user={user} path={path} url={url} />
          </div>
        )}
      </AuthorContext.Provider>
    </>
  );
};

export default DashboardPage;
