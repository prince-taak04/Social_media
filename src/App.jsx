import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Side_bar from "./components/side-bar";
import CreatePost from "./components/createPost";

import PostLists from "./components/postLists";
import PostListProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Side_bar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></Side_bar>
          <div className="content">
            <Header></Header>
            <Outlet></Outlet>

            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
