import { FaFileAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { styles } from "../styles";

const GistFile = ({ file }) => {
  return (
    <div style={styles.files}>
      <a style={styles.nonDecoration} href={file.raw_url}>
        <FaFileAlt /> {file.filename}
      </a>
    </div>
  );
};

GistFile.propTypes = {
  file: PropTypes.shape({
    filename: PropTypes.string.isRequired,
    language: PropTypes.string,
    raw_url: PropTypes.string.isRequired,
    size: PropTypes.number,
    type: PropTypes.string,
  }),
};

export default GistFile;
