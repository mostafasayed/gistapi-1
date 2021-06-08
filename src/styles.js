import Colors from "./constant/Colors";

const container = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const outerContainer = {
  flex: 1,
  width: "70%",
  borderBottom: "1px solid #F0F0F0",
  paddingTop: "20px",
  paddingBottom: "20px",
};

const owner = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  paddingRight: "20px",
  color: Colors.primaryColor,
};

const image = {
  width: "30px",
  height: "30px",
  borderRadius: 15,
};

const infoLinks = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: Colors.primaryColor,
  paddingBottom: 0,
  fontSize: "14px",
};

const metaAction = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
};

const dates = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginTop: "-5px",
  fontSize: "12px",
};

const description = {
  paddingBottom: "5px",
  color: Colors.secondaryColor,
};

const filesContainer = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
};

const files = {
  gap: "25px",
  paddingLeft: "20px",
  color: Colors.primaryColor,
};

const nonDecoration = {
  textDecoration: "none",
  color: Colors.primaryColor,
};

const fallBack = {
  margin: "50px",
  fontSize: "16px",
  color: Colors.secondaryColor,
};

export const styles = {
  container,
  outerContainer,
  owner,
  image,
  infoLinks,
  metaAction,
  dates,
  description,
  filesContainer,
  files,
  nonDecoration,
  fallBack,
};
