import React, { useState } from "react";
import { styles } from "../styles";
import { FaCodeBranch, FaCode, FaCommentAlt, FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { dateDisplay } from "../utils/dateDisplay";
import GistFile from "./GistFile";
import Colors from "../constant/Colors";

const Gist = ({ gist }) => {
  const [seeMore, setSeemore] = useState(true);
  return (
    <div style={styles.outerContainer}>
      <div style={styles.infoLinks}>
        <div style={styles.owner}>
          <img
            src={gist.owner.avatar_url}
            style={styles.image}
            alt="Owenr Avatar"
          />
          <a style={styles.nonDecoration} href={gist.owner.html_url}>
            {gist.owner.login}
          </a>
        </div>
        <div style={styles.metaAction}>
          <p>
            <FaCode /> {Object.keys(gist.files).length} Files
          </p>
          <p>
            <FaCodeBranch /> Forks
          </p>
          <p>
            <FaCommentAlt /> Comments
          </p>
          <p>
            <FaStar /> Stars
          </p>
        </div>
      </div>
      <div style={styles.dates}>
        <p>Created at: {dateDisplay(gist.created_at)}</p>
        <p>Last updated: {dateDisplay(gist.updated_at)}</p>
      </div>
      <div style={styles.description}>
        <p>{gist.description}</p>
      </div>
      <div style={styles.filesContainer}>
        {seeMore ? (
          Object.keys(gist.files).length >= 2 ? (
            <>
              {Object.values(gist.files)
                .slice(0, 2)
                .map((file, index) => {
                  return <GistFile key={index} file={file} />;
                })}
              <div
                style={{
                  textDecoration: "underline",
                  color: Colors.secondaryColor,
                }}
                onClick={() => setSeemore(false)}
              >
                {"  "}...see more
              </div>
            </>
          ) : (
            Object.values(gist.files).map((file, index) => {
              return <GistFile key={index} file={file} />;
            })
          )
        ) : (
          Object.values(gist.files).map((file, index) => {
            return <GistFile key={index} file={file} />;
          })
        )}
      </div>
    </div>
  );
};

// To check the props type
Gist.propTypes = {
  gist: PropTypes.object,
};

export default Gist;
