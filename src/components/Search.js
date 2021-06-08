import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Octicon from "react-octicon";

const Search = ({ getUserGist }) => {
  const inputHandler = (event) => {
    // Handle search with Enter button
    if (event.key === "Enter") {
      getUserGist(event.target.value);
    }
  };

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          placeholder="Search Gists for the username"
          onKeyDown={inputHandler}
        />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

// To check the props type
Search.propTypes = {
  getUserGist: PropTypes.func,
};
export default Search;
