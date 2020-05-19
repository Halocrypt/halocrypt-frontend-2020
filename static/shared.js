import { sanitizeRegExp } from "./components/shared/UserForm";
export const callback =
  window.requestAnimationFrame ||
  (window.Promise && Promise.prototype.then.bind(Promise.resolve())) ||
  setTimeout;

export const clean = (x) => (x + "").replace(sanitizeRegExp, "").toLowerCase();
export const contains = (b, a) => clean(b).includes(a);
