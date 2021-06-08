import React from "react";
import { Spinner } from "react-activity";
import PropTypes from "prop-types";
import { styles } from "../styles";
import Gist from "./Gist";
import Colors from "../constant/Colors";

const GistList = (props) => {
  return (
    <div style={styles.container}>
      {props.loading ? (
        // Handle loading state to show spinner
        <div style={styles.fallBack}>
          <Spinner color={Colors.secondaryColor} size="16" />
        </div>
      ) : props.emptySearch ? (
        // handle empty search
        <div style={styles.fallBack}>There is no data for your search term</div>
      ) : (
        props.gistList.map((gist, index) => {
          return <Gist gist={gist} key={index} />;
        })
      )}
    </div>
  );
};

// To check the props type
GistList.propTypes = {
  gistList: PropTypes.array,
  loading: PropTypes.bool,
  emptySearch: PropTypes.bool,
};

export default GistList;
