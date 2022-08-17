import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import TruyenPage from "./TruyenPage";
import TheLoaiPage from "./TheLoaiPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashboardPage from "./DashboardPage/DashboardPage";

import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useEffect, createContext } from "react";
import { setAuthorList } from "../api/authorAPI";
import { setCategoryList } from "../api/categoryAPI";
import { setSourceList } from "../api/sourceAPI";
import { setMangaList } from "../api/mangaAPI";
export const AuthorContext = createContext();
function App() {
  const listAuthors = useSelector((state) => state.authors.currentAuthors);
  const listCategories = useSelector(
    (state) => state.categories.currentCategories
  );
  const listSources = useSelector((state) => state.sources.currentSources);
  const listMangas = useSelector((state) => state.mangas.currentMangas);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await setAuthorList(dispatch);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      await setCategoryList(dispatch);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      await setSourceList(dispatch);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      await setMangaList(dispatch);
    };
    fetchData();
  }, []);
  return (
    <>
      <Router>
        <AuthorContext.Provider
          value={{
            listAuthors: listAuthors,
            listCategories: listCategories,
            listSources: listSources,
            listMangas: listMangas,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/truyen/:id">
              <TruyenPage />
            </Route>
            <Route path="/theloai">
              <TheLoaiPage />
            </Route>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>
          </Switch>
        </AuthorContext.Provider>
      </Router>
    </>
  );
}

export default App;
