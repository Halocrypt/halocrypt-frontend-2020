import FakeSet from "@hydrophobefireman/j-utils/@build-modern/src/modules/es6/loose/Set";
/** @type {import("./store").Store} */
const STORE = {
  currentTheme: null,
  userData: null,
  eventBeginTimeStamp: +new Date() + 5000, // todo
};

Object.defineProperty(STORE, "isLoggedIn", {
  get: () => !!(STORE.userData && STORE.userData.secure_data),
});
Object.defineProperty(STORE, "eventBegan", {
  get: () => STORE.eventBeginTimeStamp - +new Date() < 0,
  set: (e) => e,
});
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
    console.log("new state ->", type, data);
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
