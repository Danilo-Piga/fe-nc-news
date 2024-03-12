import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./Components/userContext";
import { useState } from "react";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Users from "./Components/Users/Users";
import Topics from "./Components/Topics/Topics";
import SingleArticle from "./Components/SingleArticle/SingleArticle";

function App() {
  const [currentUser, setCurrentUser] = useState({
    username: "jessjelly",
    name: "Jess Jelly",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/topics" element={<Topics />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route
              path="/articles/:article_id"
              element={<SingleArticle currentUser={currentUser} />}
            ></Route>
          </Routes>
        </>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
