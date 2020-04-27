export const centerTextCSS = {
  margin: "auto",
  textAlign: "center",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export function RouteLoadingFallback() {
  return "Loading..";
}
export function CredLoadingFallBack() {
  return <div style={centerTextCSS}>Checking your credentials..</div>;
}
export function ProfileLoadingFallback() {
  return "Loading profile data..";
}

export function UnexpectedError() {
  return <div style={centerTextCSS}>An Unexpected Error Occured</div>;
}
