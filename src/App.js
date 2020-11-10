import React, { useState, useEffect } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import PostList from "./components/PostList";

function App() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl =
          "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const response = await fetch(requestUrl);
        const responseUrl = await response.json();
        console.log(responseUrl);

        const { data } = responseUrl;
        setPostList(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPostList();
  }, []);
  return (
    <div className="App">
      <h1>React hook Post List!</h1>

      <ColorBox />
      <PostList posts={postList} />
    </div>
  );
}

export default App;
