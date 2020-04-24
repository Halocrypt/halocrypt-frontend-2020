import FakeSet from "@hydrophobefireman/j-utils/@build-modern/src/modules/es6/loose/Set";
/** @type {import("./store").Store} */
const STORE = {
  currentTheme: null,
  isLoggedIn: false,
  eventBeginTimeStamp: +new Date() + 10000, // todo
};

const subscriptions = new FakeSet();
export const appEvents = {
  subscribe(fn) {
    subscriptions.add(fn);
  },

  /**
   *
   * @param {keyof import("./store").Store} type
   * @param {*} data
   */
  set(type, data) {
    STORE[type] = data;
    subscriptions.forEach((x) => x(type, data, STORE));
  },
  unsubscribe(fn) {
    subscriptions.delete(fn);
  },
  getStore() {
    return STORE;
  },
};
