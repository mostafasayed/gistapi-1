import React, { useState, useEffect } from "react";
import { getPublicGists, getGistForUser } from "./services/gistService";
import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import GistList from "./components/GistList";

const App = () => {
  // Manage state for all gist
  const [gistList, setGistList] = useState([]);
  // Manage state for searched term
  const [userGist, setUserGist] = useState([]);
  // Manage if empty result
  const [emptySearch, setEmptySearch] = useState(false);
  // Manage loading state
  const [loading, setLoading] = useState(false);

  // Call getPublicGists to get all Gists
  const getGistList = async () => {
    setLoading(true);
    const response = await getPublicGists();
    try {
      if (response.status === 200) {
        setGistList(response.data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      return null;
    }
  };

  // Call getGistForUser to get specific Gists and pass the function to Search Component
  const getUserGist = async (username) => {
    setLoading(true);
    if (username === "") {
      setUserGist([]);
      setEmptySearch(false);
      setLoading(false);
    } else {
      const response = await getGistForUser(username);
      try {
        if (response.status === 200) {
          if (response.data.length > 0) {
            setUserGist(response.data);
            setEmptySearch(false);
          } else {
            setUserGist([]);
            setEmptySearch(true);
          }
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        return null;
      }
    }
  };

  // Call getGistList() once with when component mount
  useEffect(() => {
    getGistList();
  }, []);

  const getUserList = userGist.length > 0 ? userGist : gistList;

  return (
    <Wrapper className="App" data-testid="app">
      <Header getUserGist={getUserGist} />
      <GistList
        gistList={getUserList}
        emptySearch={emptySearch}
        loading={loading}
      />
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
