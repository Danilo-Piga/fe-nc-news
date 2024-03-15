import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./Components/userContext";
import { useState } from "react";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Users from "./Components/Users/Users";
import Topics from "./Components/Topics/Topics";
import SingleArticle from "./Components/SingleArticle/SingleArticle";
import ArticlesByTopic from "./Components/ArticleByTopic/ArticlesByTopic";
import ArticleComments from "./Components/ArticleComments/ArticleComments";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

function App() {
  const [currentUser, setCurrentUser] = useState({
    username: "jessjelly",
    name: "Jess Jelly",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
  });

  const [error, setError] = useState(null);
  const handleError = (errorMessage) => {
    setError(errorMessage);
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <>
          <Nav />
          {error ? (
            <ErrorPage message={error} />
          ) : (
            <Routes>
              <Route path="/" element={<Home handleError={handleError} />} />
              <Route
                path="/topics"
                element={<Topics handleError={handleError} />}
              />
              <Route
                path="/users"
                element={<Users handleError={handleError} />}
              />
              <Route
                path="/articles/:article_id"
                element={
                  <SingleArticle
                    currentUser={currentUser}
                    handleError={handleError}
                  />
                }
              />
              <Route
                path="/articles/topics/:topic"
                element={<ArticlesByTopic handleError={handleError} />}
              />
              <Route
                path="/articles/:article_id/comments"
                element={<ArticleComments handleError={handleError} />}
              />
              <Route
                path="*"
                element={<ErrorPage message={"404 - Page Not Found"} />}
              />
            </Routes>
          )}
        </>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
