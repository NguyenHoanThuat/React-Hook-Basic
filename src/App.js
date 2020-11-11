import React, { useState, useEffect } from "react";
import queryString from "query-string";

import "./App.scss";
import ColorBox from "./components/ColorBox";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import PostFilterForm from "./components/PostFilterForm";

function App() {
  const [postList, setPostList] = useState([]);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filter);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseUrl = await response.json();
        console.log(responseUrl);

        const { data, pagination } = responseUrl;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPostList();
  }, [filter]);

  const handlePageChange = (newPage) => {
    console.log("new page ", newPage);
    setFilter({
      ...filter,
      _page: newPage,
    });
  };

  const handleOnSubmit = (newFilter) => {
    console.log("qqqqqqqq", newFilter);
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilter.search,
    });
  };

  return (
    <div className="App">
      <h1>React hook Post List!</h1>

      <ColorBox />
      <PostFilterForm onSubmit={handleOnSubmit} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
