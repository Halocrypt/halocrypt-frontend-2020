import { logging, devMode } from "./apiRoutes";
import { postJSONRequest, getRequest } from "./http/requests";
import { appEvents } from "./globalStore";
import assign from "@hydrophobefireman/j-utils/@build-modern/src/modules/Object/assign";

const initUserConfig = assign({ session: randString() }, window.__initConfig);
window.__initConfig = null;

const store = appEvents.getStore();
const callback =
  window.requestIdleCallback ||
  window.requestAnimationFrame ||
  (window.Promise && Promise.prototype.then.bind(Promise.resolve())) ||
  setTimeout;
class Logger {
  constructor() {
    this.pageViewRegistered = "register-start";
    this.registerActionComplete = "register-end";
    this.pageViewLogin = "login-start";
    this.loginActionCompleted = "login-end";
    this.pageViewPlay = "play-start";
    this.accessQuestion = "question";
    this.answeredQuestion = "answered";
    this.leaderboardView = "leaderboard";
    this.profileView = "profile";
  }
  __shouldPostLog() {
    return !devMode;
  }
  _admin_getLogs() {
    if (!store.isLoggedIn || !store.userData.is_admin) return;
    return getRequest(logging.getLogs);
  }
  sendUserLog(dataOrType) {
    const data =
      typeof dataOrType === "string" ? { type: dataOrType } : dataOrType;
    const nextData = assign({}, data, initUserConfig);
    if (this.__shouldPostLog()) {
      callback(() => postJSONRequest(logging.addLog, nextData));
    } else {
      console.log("prod log post ->", nextData);
    }
  }
}

export const logger = new Logger();

window.onerror = (message, source, _lineno, _colno, err) => {
  const errorInfo = err || {};
  message = message || errorInfo.message || "";

  const line = err.line || errorInfo.message || 0;

  const column = err.column || 0;

  const script = errorInfo.script || "";

  const stack = errorInfo.stackTrace || errorInfo.stack || "";

  const timestamp = Date.now();

  const url = location.href;
  logger.sendUserLog({
    type: "js-error",
    timestamp,
    message,
    line,
    column,
    script,
    stack,
    url,
    source,
  });
};

function randString() {
  const hasCrypto = "crypto" in self;
  let rv;
  if (hasCrypto) {
    return crypto.getRandomValues(new Uint8Array(10)).join("-");
  }
  return String(Math.random());
}
