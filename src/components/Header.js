import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import PropTypes from "prop-types";
import Search from "./Search";

function Header({ getUserGist }) {
  return (
    <Wrapper>
      <Octicon name="mark-github" mega />
      <Search getUserGist={getUserGist} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

// To check the props type
Header.propTypes = {
  getUserGist: PropTypes.func,
};

export default Header;
