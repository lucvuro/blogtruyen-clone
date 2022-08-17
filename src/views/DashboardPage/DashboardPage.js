import DashboardComponent from "./DashboardComponent";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useEffect, createContext } from "react";
const DashboardPage = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  
  const history = useHistory();
  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  });
  const { path, url } = useRouteMatch();
  return (
    <>
      
        {user && (
          <div className="dashboard-container">
            <DashboardComponent user={user} path={path} url={url} />
          </div>
        )}
      
    </>
  );
};

export default DashboardPage;
