const devHost = "http://localhost:5000";
const prodHost = "https://halocrypt-20.herokuapp.com";
const devMode = location.hostname.includes("localhost");
const host = devMode ? devHost : prodHost;
function apiURL(url) {
  const u = new URL(url, host);
  return u.href;
}
export const user = {
  authenticate: apiURL("/api/user/authenticate"),
  getUserDetails: apiURL("/api/user/get-user-details"),
  createAccount: apiURL("/api/user/create"),
  forgotPassword: apiURL("/api/user/forgot-password"),
  checkPasswordToken: apiURL("/api/user/check-password-token"),
  verifyEmail: apiURL("/api/user/verify-email"),
  checkEmailToken: apiURL("/api/user/check-email-token"),
  checkAuth: apiURL("/api/user/check-auth"),
  logout: apiURL("/api/logout"),
};
export const play = {
  getLeaderboard: apiURL("/api/play/get-leaderboard"),
  getQuestion: apiURL("/api/play/get-question"),
  answerQuestion: apiURL("/api/play/answer"),
};
export const admin = {
  createAdminAccount: apiURL("/api/admin/create-admin-account"),
  elevateStatus: apiURL("/api/admin/elevate-status"),
  getAllUsers: apiURL("/api/admin/get-users"),
  addQuestion: apiURL("/api/admin/add-question"),
  getLatestQuestionNumber: apiURL("/api/admin/get-latest-question-number"),
  editQuestion: apiURL("/api/admin/edit-question"),
  setLevel: apiURL("/api/admin/set-level"),
  deleteUser: apiURL("/api/admin/delete-user"),
  disqualify: apiURL("/api/admin/disqualify"),
  requalify: apiURL("/api/admin/requalify"),
};
export const logging = {
  addLog: null,
};
