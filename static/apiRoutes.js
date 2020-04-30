export const devHost = "http://localhost:5000";
export const prodHost = "https://halocrypt-20.herokuapp.com";
export const devMode = location.hostname.includes("localhost");
export const host = devMode ? devHost : prodHost;
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
  edit: apiURL("/api/user/edit"),
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
  getAllQuestions: apiURL("/api/admin/get-questions"),
  editQuestion: apiURL("/api/admin/edit-question"),
  setLevel: apiURL("/api/admin/set-level"),
  deleteUser: apiURL("/api/admin/delete-user"),
  disqualify: apiURL("/api/admin/disqualify"),
  requalify: apiURL("/api/admin/requalify"),
};
export const logging = {
  addLog: apiURL("/api/ginggol/1"),
  getLogs: apiURL("/api/ginggol/get"),
};
